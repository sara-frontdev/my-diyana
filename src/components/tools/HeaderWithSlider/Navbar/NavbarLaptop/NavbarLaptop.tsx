"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// componnets
import SearchHeder from "../../SearchHeder/SearchHeder";

// core
import { mainHeaderMenu } from "@/core/data/headerMenu/headerMenu";

const NavbarLaptop = () => {
  const pathname = usePathname();

  const rightMenu = mainHeaderMenu.filter(
    (item) =>
      item.title &&
      item.href &&
      ["/", "/education", "/store", "/gallery", "/news"].includes(item.href)
  );

  const leftMenu = mainHeaderMenu.filter(
    (item) =>
      item.title &&
      item.href &&
      ["/about-us", "/contact-us"].includes(item.href)
  );

  return (
    <nav
      aria-label="منوی ناوبری دسکتاپ"
      className="relative hidden lg:flex items-center justify-between bg-white border border-customeBlack rounded-b-[1.5rem] p-4 z-10 w-full"
    >
      {/* منوی راست */}
      <ul className="flex items-center justify-between  lg:w-[44%]">
        {rightMenu.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href} className="text-lg text-customeBlack">
              <Link
                href={item.href}
                className={`${isActive && "border-b-2  border-customepink"}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* منوی چپ */}
      <ul className="flex items-center justify-between  lg:w-[40%]">
        {leftMenu.map((item, index) => {
          const isActive = pathname === item.href;
          return (
            <li
              key={item.href}
              className="text-lg xl:text-xl text-customeBlack"
            >
              <Link
                href={item.href}
                className={`${isActive && "border-b-2  border-customepink"}`}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <SearchHeder />
      </ul>
    </nav>
  );
};

export default NavbarLaptop;
