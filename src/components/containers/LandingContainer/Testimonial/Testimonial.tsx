"use client";

import Image from "next/image";

// lib
import { useInView } from "react-intersection-observer";

import CustomeSlider from "@/components/commonComponents/CustomeSlider/CustomeSlider";

import { testimonial } from "@/core/data/Landing/Testimonial/Testimonial.data";

// img
import puzzle from "$/images/landing/testimonial/puzzle.webp";

const Testimonial = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className="relative w-full 2xl:w-[1400px]  2xl:min-h-[45rem]  flex items-start justify-center 
                  pt-8 mt-16 md:mt-[-8rem] lg:mt-[-3rem] 2xl:mt-[-10rem] mb-[18rem] sm:mb-60  2xl:mb-0 mx-auto "
    >
      <div className="absolute  right-0 top-[20rem] md:right-0 md:top-[20rem] lg:right-[6rem] lg:top-[20rem] flex">
        <Image
          src={puzzle.src}
          alt=" تصویر پس زمینه مشاهده نظرات"
          width={300}
          height={300}
          className="object-contain w-[300px] h-[300px]"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl px-4">
        <div className="bg-[#fcdede] rounded-xl p-4 flex flex-col items-center max-w-3xl mx-auto">
          <div className="absolute -top-4 right-[3rem] flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
          </div>

          {inView && (
            <CustomeSlider
              items={testimonial}
              imagePosition="left"
              bgColor="bg-[#fcdede]"
              bgdesc="bg-[#fdeced]"
              titleSlider="پیام های رضایت شما"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
