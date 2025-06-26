"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

// components
const Slider = dynamic(() => import("./Slider/Slider"), {
  ssr: false,
  loading: () => <SkeletonSlider />,
});

import SkeletonSlider from "@/components/commonComponents/SkeletonSlider/SkeletonSlider";

// image
import backGreen from "$/images/landing/slider/new12.webp";

const SliderContainer = () => {
  return (
    <>
      <div className="relative w-full h-[870px] flex items-center justify-center">
        {/* تصویر پس‌زمینه */}
        <Image
          src={backGreen.src}
          alt=""
          aria-hidden="true"
          role="presentation"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 80vw, 500px"
        />

        {/* اسلایدر */}
        <div className="relative z-10  md:max-w-[70rem] w-full ">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
