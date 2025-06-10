"use client";

import Image from "next/image";

// lib
import { useInView } from "react-intersection-observer";

// components
import CustomeSlider from "@/components/commonComponents/CustomeSlider/CustomeSlider";

// core
import { courses } from "@/core/data/Landing/Courses/Courses.data";

// image
import backCourse from "$/images/landing/DianaCourses/backCourses.webp";

const DianaCourses = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <div
      ref={ref}
      className="relative w-full min-h-[130vh] md:min-h-[190vh] 2xl:min-h-[108vh] 
                overflow-hidden flex items-start justify-center pt-[8rem] md:pt-[19rem] mt-[10rem]
                lg:mt-[15rem] 2xl:w-[1400px] 2xl:my-[10rem] mx-auto"
    >
      <Image
        src={backCourse.src}
        alt=" تصویر پس زمینه دوره های درس"
        fill
        className="object-cover"
        sizes="100vw"
      />

      <div className="relative z-10 w-full max-w-3xl px-4">
        <div className="bg-[#e0eefa] rounded-xl p-4 flex flex-col items-center max-w-3xl mx-auto">
          <div className="absolute -top-4 left-[3rem] flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
          </div>

          {inView && (
            <CustomeSlider
              items={courses}
              imagePosition="right"
              bgColor="bg-[#e0eefa]"
              bgdesc="bg-[#f1f7fc]"
              titleSlider="دوره های آکادمی دیانا"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DianaCourses;
