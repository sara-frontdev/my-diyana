"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// components
import TitleLanding from "../TItleLanding/TitleLanding";

// نوع آیتم‌ها
type SlideItem = {
  id: string | number;
  image: string;
  title: string;
  description: string;
};

type ICustomeSliderProps = {
  items: any;
  imagePosition?: "left" | "right"; // راست یا چپ بودن عکس
  bgColor?: string; // کلاس رنگ پس‌زمینه
  bgdesc: string;
  titleSlider: string;
};

const CustomeSlider = ({
  items,
  imagePosition,
  bgColor,
  bgdesc,
  titleSlider,
}: ICustomeSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, EffectFade]}
      navigation={{
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
      }}
      loop
      slidesPerView={1}
      effect="fade"
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      className="w-full"
    >
      {items.map((item: any) => (
        <SwiperSlide key={item.id}>
          <div
            className={`flex flex-col-reverse lg:flex ${
              imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between gap-4 ${bgColor} p-4 rounded-xl shadow-md relative`}
          >
            {/* عکس */}
            <div className="w-full md:w-1/2 relative h-40">
              <Image
                src={item.image}
                alt={`${item.id} - ${item.title}`}
                fill
                sizes="(max-width: 640px) 80vw, 500px"
                className="object-cover rounded-xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/images/landing/slider/placeholder.png"
              />

              {/* دکمه‌های ناوبری */}
              <button className="custom-prev absolute left-1 top-1/2 -translate-y-1/2 bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow">
                ←
              </button>
              <button className="custom-next absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow">
                →
              </button>
            </div>

            {/* ستون چپ شامل عنوان + توضیحات */}
            <div className="lg:w-1/2 flex flex-col gap-2">
              {/* عنوان بالای توضیحات و بیرون از رنگ صورتی */}
              <TitleLanding className="mb-4">{titleSlider}</TitleLanding>

              {/* توضیحات داخل باکس رنگی */}
              <div
                className={`p-3 rounded-xl lg:h-[20rem] overflow-auto ${bgdesc}`}
              >
                <h3 className="font-semibold text-customeBlack mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomeSlider;
