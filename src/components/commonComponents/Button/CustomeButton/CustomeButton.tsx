// base
import React from "react";

// lib
import Link from "next/link";
import { Button } from "antd";

type ICustomButtonProps = {
  href?: string;
  text?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isAlreadyInCart?: boolean;
  isPayment?: boolean;
  handleClickPayment?: (e: React.MouseEvent<HTMLElement>) => void;
  handleViewClassesChange?: (e: React.MouseEvent<HTMLElement>) => void;
  isCartPage?: boolean;
};

const CustomButton = ({
  href,
  text,
  className = "",
  onClick,
  isAlreadyInCart,
  isPayment,
  handleClickPayment,
  handleViewClassesChange,
  isCartPage,
}: ICustomButtonProps) => {
  return (
    <>
      {isPayment ? (
        <Button
          className={`
            text-sm !text-white text-[1.1rem] border-none outline-none !rounded-[2rem] transition-all duration-500 ease-in-out 
            !bg-customeBlueDeep hover:!bg-customepink hover:!text-customeBlack
            ${className}
            ${isCartPage && "padding-Payment"}
          `}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleClickPayment?.(e);
          }}
        >
          <p>پرداخت</p>
        </Button>
      ) : href ? (
        <Link
          href={href}
          className={`
            text-sm !text-customeBlack text-[1.1rem] !rounded-[2rem] transition-all duration-500 ease-in-out  py-2 px-[2.5rem]
             !bg-customeBlueDeep hover:!bg-customepink
            ${className}
          `}
        >
          {text}
        </Link>
      ) : (
        <>
          {isAlreadyInCart ? (
            <Button
              className="!border-none !shadow-none !bg-transparent !text-transparent hover:!border-none hover:!shadow-none active:!border-none"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleViewClassesChange?.(e);
              }}
            >
              <div
                className="flex  items-center justify-center h-[2rem] 
                            !shadow-none !border-none !rounded-[2rem] bg-green-500 text-white
                            hover:bg-green-900 hover:!border-none hover:!shadow-none active:!border-none
                            transition-all duration-500 ease-in-out cursor-pointer px-2"
              >
                <p className="text-[0.9rem]">این کلاس قبلا انتخاب شده است </p>
                <span className="text-[0.9rem]">(نمایش کلاس ها )</span>
              </div>
              {/* </div> */}
            </Button>
          ) : (
            <Button
              className={`
                text-sm !text-customeBlack text-[1.1rem] !border-none !outline-none !rounded-[2rem] transition-all duration-500 ease-in-out 
                 !bg-customeBlueDeep hover:!bg-customepink
                ${className}
              `}
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                onClick?.(e);
              }}
            >
              <p>انتخاب کلاس</p>
            </Button>
          )}
        </>
      )}
    </>
  );
};

export { CustomButton };
