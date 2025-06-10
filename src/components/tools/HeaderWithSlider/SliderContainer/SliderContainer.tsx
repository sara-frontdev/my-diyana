"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import Image from "next/image";

// lib
import { useInView } from "react-intersection-observer";

// components
const Slider = dynamic(() => import("./Slider/Slider"), {
  ssr: false,
});

import SkeletonSlider from "@/components/commonComponents/SkeletonSlider/SkeletonSlider";

// image
import backGreen from "$/images/landing/slider/backandwave.webp";

const SliderContainer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    if (inView) setShowSlider(true);
  }, [inView]);

  return (
    <>
      <div
        ref={ref}
        className="relative w-full h-[800px] md:h-[900px] xl:h-[1000px] flex flex-col items-center justify-center overflow-hidden pt-[4rem] md:pt-[2rem]"
      >
        {/* تصویر پس‌زمینه */}
        <Image
          src={backGreen.src}
          alt="ابر گرافیکی"
          aria-hidden="true"
          role="presentation"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 640px) 80vw, 500px"
        />

        {/* اسلایدر */}
        <div className="relative z-10  md:max-w-[70rem] w-full">
          {showSlider ? <Slider /> : <SkeletonSlider />}
        </div>
      </div>
    </>
  );
};

export default SliderContainer;
