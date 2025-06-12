import dynamic from "next/dynamic";

// components
import CustomeSliderSkeleton from "@/components/commonComponents/CustomeSliderSkeleton/CustomeSliderSkeleton";
import DianaActivities from "./DianaActivities/DianaActivities";
import AboutLanding from "./AboutLanding/AboutLanding";

const DianaCourses = dynamic(() => import("./DianaCourses/DianaCourses"), {
  ssr: false,
  loading: () => <CustomeSliderSkeleton />,
});

const Testimonial = dynamic(() => import("./Testimonial/Testimonial"), {
  ssr: false,
  loading: () => <CustomeSliderSkeleton />,
});

const LandingContainer = () => {
  return (
    <>
      <DianaActivities />
      <AboutLanding />
      <DianaCourses />
      <Testimonial />
    </>
  );
};

export default LandingContainer;
