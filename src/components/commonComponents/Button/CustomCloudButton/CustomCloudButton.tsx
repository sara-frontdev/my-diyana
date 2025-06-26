import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface IPropType {
  text: string;
  href: string;
}

const CustomCloudButton: FC<IPropType> = ({ text, href }) => {
  return (
    <Link href={href} className="relative inline-block">
      <div className="w-[120px] sm:w-[180px] h-[130px] relative">
        <Image
          src="/images/general/abrpink.webp"
          alt="تصویر ابر صورتی"
          fill
          className="object-contain cursor-pointer"
          sizes="(max-width: 768px) 100vw, 180px"
        />
      </div>

      <span className="absolute inset-0 flex items-center justify-center text-base sm:text-xl text-customeBlack font-bold">
        {text}
      </span>
    </Link>
  );
};

export default CustomCloudButton;
