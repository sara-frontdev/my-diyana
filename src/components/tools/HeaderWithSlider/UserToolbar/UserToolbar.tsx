"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// lib
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

// core
import { useUserAuth } from "@/core/context/AuthenticationContext";
import { useShoppingCartContext } from "@/core/context/ShoppingCartContext";
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { BiLogInCircle } from "react-icons/bi";
import LoginButton from "./LoginButton/LoginButton";

const UserToolbar = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // context
  const { cart } = useShoppingCartContext();
  const { userInfo } = useUserAuth();

  // var
  const Numbercount = cart?.courseUnitSelects?.length || 0;
  const isLogged = userInfo && userInfo?.name;

  return (
    <ul
      className="absolute 
                    xxs:left-[22px] xs2:left-[45px]
                    left-[15px] sm:left-[62px] md:left-[70px] lg:left-[78px] top-[45px] 2xl:left-[95px] 
                    flex items-center gap-2 sm:gap-4 list-none z-50"
    >
      <li>
        {/* {isLogged ? (
          <Link href="/profile">
            <CiUser className="cursor-pointer text-xl sm:text-2xl" />
          </Link>
        ) : (
          <Link href={authUrlEnum.login} className=" text-customeBlack">
            <BiLogInCircle className="cursor-pointer  text-xl sm:text-2xl" />
          </Link>
        )} */}

        <LoginButton />
      </li>

      <li>
        <Link href="/wishlist">
          <CiHeart className="cursor-pointer  text-xl sm:text-2xl" />
        </Link>
      </li>

      <li className="relative">
        <Link href="/cart" className=" relative">
          <CiShoppingCart className="cursor-pointer  text-xl sm:text-2xl" />
          {hasMounted && (
            <span className="w-5 h-5 text-customeBlack absolute top-[9px] left-[4px] flex justify-center items-center bg-customepink rounded-full text-sm">
              {Numbercount}
            </span>
          )}
        </Link>
      </li>
    </ul>
  );
};

export default UserToolbar;
