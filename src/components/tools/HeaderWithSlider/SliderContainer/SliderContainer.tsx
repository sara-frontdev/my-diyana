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
import backGreen from "$/images/landing/slider/backandwave.webp";

const SliderContainer = () => {
  return (
    <>
      <div className="relative w-full h-[800px] md:h-[900px] xl:h-[1000px] flex flex-col items-center justify-center overflow-hidden pt-[10rem] md:pt-[2rem]">
        {/* تصویر پس‌زمینه */}
        <Image
          src={backGreen.src}
          alt=""
          aria-hidden="true"
          role="presentation"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 80vw, 500px"
        />

        {/* اسلایدر */}
        <div className="relative z-10  md:max-w-[70rem] w-full">
          <Slider />
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
