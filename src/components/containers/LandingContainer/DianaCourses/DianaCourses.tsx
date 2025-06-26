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
    <div
      className="relative w-full 
                xxs:min-h-[450px]
                min-h-[500px] xs1:min-h-[610px] xs2:min-h-[710px] sm:min-h-[850px] 
                md:min-h-[850px] lg:min-h-[1100px] xl:min-h-[1400px]
                custome2xl1:w-[1400px] custome2xl1:mx-auto 
                bg-white "
    >
      {/* تصویر بک‌گراند، کامل دیده میشه بدون بریدگی */}
      <div className="absolute inset-0 hidden md:block z-0">
        <Image
          src={backCourse.src}
          alt=" تصویر پس زمینه دوره های درس"
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 block md:hidden z-0">
        <Image
          src={backMobile.src}
          alt=" تصویر پس زمینه دوره های درس"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 0vw"
        />
      </div>

      <div
        className="absolute xxs:top-[338px] xxs1:top-[347px] xs1:top-[370px] xs2:top-[375px] 
                  sm:top-[425px] md:top-[520px]  lg:top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-full 
                  max-w-2xl md:max-w-2xl xl:max-w-5xl custome2xl:max-w-4xl custome2xl1:max-w-5xl 
                  px-4  z-10
                  "
      >
        <div className="bg-[#e0eefa] rounded-xl p-4 flex flex-col items-center relative">
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
