import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface IPropType {
  text: string;
  href: string;
}

const CustomButton: FC<IPropType> = ({ text, href }) => {
  return (
    <Link href={href} className="relative inline-block">
      <Image
        src="/images/general/abrpink.webp"
        alt="تصویر ابر صورتی"
        width={120}
        height={120}
        className="h-auto w-auto cursor-pointer"
      />
      <span className="absolute inset-0 flex items-center justify-center text-customeBlack font-bold">
        {text}
      </span>
    </Link>
  );
};

export default CustomButton;
