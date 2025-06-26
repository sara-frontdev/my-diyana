// base
import Link from "next/link";

// lib
import { BiLogOut } from "react-icons/bi";

// core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { usePanelLayoutUtils } from "@/core/hooks/usePanelLayoutUtils";
import { AiFillHeart } from "react-icons/ai";

const Content = () => {
  const { userInfo } = useUserAuth();
  const windowWidth = usePanelLayoutUtils();
  return (
    <div className="flex flex-col gap-2">
      <div className="flex lg:hidden">
        <p className="text-customeBlueDeep text-lg sm:text-2xl pr-3 flex items-center gap-2">
          {`${userInfo.name} جون`}
        </p>
        <AiFillHeart size={10} className="text-red-500" />
      </div>

      {/* {userPanelNav().map((item, index) => (
        <Link
          key={index}
          href={item.key as any}
          className="group flex items-center px-2 sm:px-4 sm:py-2  text-[#1d1b1b] cursor-pointer text-right
                  hover:bg-customeOrangeHover transition-all duration-500 ease-in-out "
        >
          <span className="text-customeOrange group-hover:text-white transition-all duration-300">
            {item.icon}
          </span>
          <p className="text-base sm:text-lg pr-2 group-hover:text-white transition-all duration-300">
            {item.label || "!"}
          </p>
        </Link>
      ))} */}

      {windowWidth > 640 ? (
        <Link
          href={authUrlEnum.logout}
          className="flex items-center px-2 sm:px-4 sm:py-2 text-[#1d1b1b] cursor-pointer text-right
            hover:bg-customeOrangeHover transition-all duration-500 ease-in-out hover:bg-customepink"
        >
          <BiLogOut
            size={20}
            className="text-customeOrange text-customeBlack transition-all duration-300 "
          />
          <p className="text-lg pr-2 text-customeBlack transition-all duration-300">
            خروج از حساب کاربری
          </p>
        </Link>
      ) : (
        <Link
          href={authUrlEnum.logout}
          className="flex items-center px-2 sm:px-4 sm:py-2 text-[#1d1b1b] cursor-pointer text-right
            hover:bg-customeOrangeHover transition-all duration-500 ease-in-out hover:bg-customepink"
        >
          <p className="text-lg pr-2 text-customeBlack transition-all duration-300">
            خروج از حساب
          </p>
        </Link>
      )}
    </div>
  );
};

export { Content };
