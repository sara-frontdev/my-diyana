"use client";

import { useEffect, useState } from "react";
// base
import Link from "next/link";
import Image from "next/image";

// lib
import { TiThMenu } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";

// search
import SearchHeder from "../../SearchHeder/SearchHeder";

// core
import { mainHeaderMenu } from "@/core/data/headerMenu/headerMenu";

// logo
import logo from "$/logo1.png";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  // بستن منو با کلید Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <nav
      aria-label="منوی ناوبری موبایل "
      className="flex justify-between items-center  bg-white border border-customeBlack rounded-b-[1.5rem] p-2  lg:hidden"
    >
      <button
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="cursor-pointer"
        aria-label="باز کردن منوی ناوبری"
        onClick={() => setIsOpen(true)}
      >
        <TiThMenu size={25} />
      </button>

      <div>
        <SearchHeder />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-label"
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 id="mobile-menu-label" className="sr-only">
          منوی ناوبری موبایل
        </h2>

        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <Image
              src={logo.src}
              alt=" لوگوی آکادمی کودک دیانا"
              width="100"
              height="100"
              priority
              style={{ height: "auto" }}
              className="object-cover"
            />
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-xl"
            aria-label="بستن منو"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col p-4 space-y-4">
          {mainHeaderMenu
            .filter((item) => item.title && item.href)
            .map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.href}
                  className="text-base text-customeBlack flex items-center gap-2"
                >
                  {Icon && <Icon className="text-xl text-customeBlueDeep" />}
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
