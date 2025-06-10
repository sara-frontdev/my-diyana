import dynamic from "next/dynamic";

// components
import DianaActivities from "./DianaActivities/DianaActivities";
import AboutLanding from "./AboutLanding/AboutLanding";

const DianaCourses = dynamic(() => import("./DianaCourses/DianaCourses"), {
  ssr: false,
});

const Testimonial = dynamic(() => import("./Testimonial/Testimonial"), {
  ssr: false,
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
