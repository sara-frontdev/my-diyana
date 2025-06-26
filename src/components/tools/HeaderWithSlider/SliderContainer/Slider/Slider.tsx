"use client";
import { useState } from "react";

// lib
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// core
import { slides } from "@/core/data/Landing/sliders/sliders.data";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative  flex items-center justify-cente px-2 sm:px-8 xxs:mt-[-8rem] xs3:mt-[-12rem]  sm:mt-[-10rem] xl:mt-[-19rem]">
      {/* Whiteboard Container */}
      <div
        className="relative bg-white rounded-3xl shadow-lg border-2 border-[#c7ccf7] 
                        w-full 
                        px-4 pt-4 pb-8 overflow-hidden"
      >
        <div className=" rounded-2xl p-2 relative">
          {/* Decorative top tabs */}
          <div className="absolute -top-4 left-4 flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
          </div>

          <div className="absolute -top-4 right-4 flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
          </div>

          {/* Swiper Slides */}
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            pagination={{ clickable: true, el: ".custom-pagination" }}
            loop={true}
            slidesPerView={1}
            spaceBetween={30}
            effect="fade"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            className="mySwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-[400px]">
                  <Image
                    src={slide.image}
                    alt={`${slide.id} - اسلاید شماره ${slide.id}`}
                    priority={slide.id === 1}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover   rounded-xl"
                    loading={index === 0 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="/images/landing/slider/placeholder.png"
                  />
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Arrows */}
            <button
              aria-label="اسلاید قبلی"
              className="prev-button absolute left-2 top-1/2 transform -translate-y-1/2 bg-white border border-black rounded-md p-1 z-10"
            >
              ←
            </button>
            <button
              aria-label="اسلاید بعدی"
              className="next-button absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-black rounded-md p-1 z-10"
            >
              →
            </button>
          </Swiper>
        </div>

        {/* Custom Pagination Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-[#b3c5f4] rounded-full px-4 py-1">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#f4c7cf]" : "bg-white"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
