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
import { testimonial } from "@/core/data/Landing/Testimonial/Testimonial.data";

// img
import puzzle from "$/images/landing/testimonial/puzzle.webp";

const Testimonial = () => {
  return (
    <div
      className="relative w-full  custome2xl1:w-[1400px] custome2xl1:mx-auto 
                    mb-52 mt-40 xs1:mt-8 xs2:mt-0 sm:mt-0 lg:mt-[-148px] xl:mt-[-163px]"
    >
      <div className="absolute right-0 top-72 sm:right-20">
        <Image
          src={puzzle.src}
          alt=" تصویر پس زمینه مشاهده نظرات"
          width={300}
          height={300}
          className="object-contain w-[300px] h-[300px]"
        />
      </div>

      <div
        className="relative z-10
                      max-w-2xl md:max-w-2xl xl:max-w-5xl custome2xl:max-w-4xl custome2xl1:max-w-5xl 
                     mx-auto px-4 "
      >
        <div className="bg-[#fcdede] rounded-xl p-4 flex flex-col items-center ">
          <div className="absolute -top-4 left-[3rem] flex gap-1">
            <div className="w-2 h-6 bg-[#a5bce6] rounded" />
            <div className="w-2 h6 bg-[#a5bce6] rounded" />
          </div>

          <CustomeSlider
            items={testimonial}
            imagePosition="left"
            bgColor="bg-[#fcdede]"
            bgdesc="bg-[#fdeced]"
            titleSlider="پیام های رضایت شما"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
