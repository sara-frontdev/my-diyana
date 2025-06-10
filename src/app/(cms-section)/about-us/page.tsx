import { Metadata } from "next";

// components
import { AboutContainer } from "@/components/containers/AboutContainer/AboutContainer";

export const metadata: Metadata = {
  title: "درباره ما |  مهد کودک دیانا",
  description: "به مهد کودک دیانا خوش  آمدید",
};

const AboutUS = () => {
  return (
    <>
      <AboutContainer />
    </>
  );
};

export default AboutUS;
