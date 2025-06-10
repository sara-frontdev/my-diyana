"use client";

import Image from "next/image";

// lib
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// core
import { courses } from "@/core/data/Landing/Courses/Courses.data";
import TitleLanding from "@/components/commonComponents/TItleLanding/TitleLanding";

const DianaCoursesSlider = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div
              className="flex flex-col-reverse lg:flex lg:flex-row-reverse items-center 
            justify-between gap-4 bg-[#e0eefa] p-4 rounded-xl shadow-md relative"
            >
              {/* عکس و دکمه‌ها */}
              <div className="w-full md:w-1/2 relative  h-40">
                <Image
                  src={course.image}
                  alt={`${course.id} - اسلاید شماره ${course.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover   rounded-xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/images/landing/slider/placeholder.png"
                />

                {/* Navigation سفارشی */}
                <button className="custom-prev absolute left-1 top-1/2 -translate-y-1/2 bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow">
                  ←
                </button>
                <button className="custom-next absolute right-1 top-1/2 -translate-y-1/2 bg-white text-black border rounded-md w-6 h-6 flex items-center justify-center shadow">
                  →
                </button>
              </div>

              {/* توضیحات */}
              <div className="lg:w-1/2 bg-[#f1f7fc] p-3 rounded-xl lg:h-[20rem] overflow-auto">
                <h3 className="font-semibold text-gray-800 mb-1">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DianaCoursesSlider;
