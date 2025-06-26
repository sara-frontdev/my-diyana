//base
import { FC } from "react";
import { Metadata } from "next";

//components
import { RegisterContainer } from "@/components/containers/Auth/RegisterContainer/RegisterContainer";

export const metadata: Metadata = {
  title: "ثبت نام (3) | مهد کودک دیانا",
  description: "ثبت نام (3) | مهد کودک دیانا",
};

const Register: FC = () => {
  return <RegisterContainer />;
};

export default Register;
