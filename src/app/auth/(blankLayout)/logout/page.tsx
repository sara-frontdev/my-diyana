//base
import { FC } from "react";
import { Metadata } from "next";

//components
import { LogoutContainer } from "@/components/containers/Auth/LogoutContainer/LogoutContainer";

export const metadata: Metadata = {
  title: "در حال خروج .... | مهد کودک دیانا",
  description: "در حال خروج .... | مهد کودک دیانا",
};

const Logout: FC = () => {
  return <LogoutContainer />;
};

export default Logout;
