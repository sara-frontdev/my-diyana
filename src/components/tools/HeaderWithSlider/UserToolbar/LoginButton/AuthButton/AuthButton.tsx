"use client";

// base
import { useRef, useState } from "react";

// lib
import { BiLogInCircle } from "react-icons/bi";
import { FaArrowDown } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";

// compoennts
import { UserPopOver } from "./UserPopOver/UserPopover";

// core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { useUserAuth } from "@/core/context/AuthenticationContext";

import Link from "next/link";
import { CiUser } from "react-icons/ci";

const AuthButton = () => {
  const [isOpenMenu, setIsOpenMunu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { userInfo } = useUserAuth();
  const isLogged = userInfo && userInfo?.name;

  return (
    <Link href={authUrlEnum.login} className=" text-customeBlack">
      <BiLogInCircle className="cursor-pointer  text-xl sm:text-2xl" />
    </Link>
  );
};

export { AuthButton };
