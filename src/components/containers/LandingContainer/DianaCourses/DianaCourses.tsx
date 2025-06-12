"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

// components
const CustomeSlider = dynamic(
  () => import("@/components/commonComponents/CustomeSlider/CustomeSlider"),
  {
    ssr: false,
    loading: () => <SkeletonCustomeSlider imagePosition="left" />,
  }
);

import SkeletonCustomeSlider from "@/components/commonComponents/CustomeSliderSkeleton/CustomeSliderSkeleton";

// core
import { courses } from "@/core/data/Landing/Courses/Courses.data";

// image
import backCourse from "$/images/landing/DianaCourses/backCourses.webp";
import backMobile from "$/images/landing/DianaCourses/backMobile.webp";

const DianaCourses = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-[70vh] xl:min-h-[180vh] custome2xl:min-h-[200vh] custome2xl1:min-h-[200vh]">
      <Image
        src={backCourse.src}
        alt=" تصویر پس زمینه دوره های درس"
        fill
        className="object-cover hidden lg:block"
        sizes="100vw"
      />
      <Image
        src={backMobile.src}
        alt=" تصویر پس زمینه دوره های درس"
        fill
        className="object-cover block lg:hidden"
        sizes="100vw"
      />

      <div className="relative z-10 max-w-3xl  md:max-w-xl  xl:max-w-3xl  custome2xl:max-w-4xl custome2xl1:max-w-5xl mx-auto px-4 mt-[10rem] xl:mt-[18rem] ">
        <div className="bg-[#e0eefa] rounded-xl p-4 flex flex-col items-center ">
          <div className="absolute -top-4 left-[3rem] flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
          </div>

          <CustomeSlider
            items={courses}
            imagePosition="right"
            bgColor="bg-[#e0eefa]"
            bgdesc="bg-[#f1f7fc]"
            titleSlider="دوره های آکادمی دیانا"
          />
        </div>
      </div>
    </div>
  );
};

export default DianaCourses;
