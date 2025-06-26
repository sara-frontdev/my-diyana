"use client";

// base
import { useEffect, useState } from "react";
import Link from "next/link";

// components
import { SelectedBasketCourse } from "./SelectedBasketCourse/SelectedBasketCourse";
import { BasketCalculations } from "./BasketCalculations/BasketCalculations";
import { EmptyData } from "@/components/common/EmptyData/EmptyData";

// core
import { useShoppingCartContext } from "@/core/context/ShoppingCartContext";

// img
import emptyCart from "$/images/cart/emptyCart.webp";

const CartContainer = () => {
  // context
  const { cart } = useShoppingCartContext();

  // برای جلوگیری از mismatch
  // با این تغییر، محتوای سمت سرور و کلاینت یکی میشه
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      {cart?.courseUnitSelects?.length > 0 ? (
        <section className="grid lg:grid-cols-12 gap-4 mx-16 mt-16">
          <div className="col-span-12 lg:col-span-8 border border-solid border-[#e5e5e5] rounded-lg bg-white  ">
            <SelectedBasketCourse cartItem={cart.courseUnitSelects} />
          </div>
          <div className="col-span-12 lg:col-span-4 ">
            <BasketCalculations cartItem={cart.courseUnitSelects} />
          </div>
        </section>
      ) : (
        <div className="flex flex-col justify-center items-center w-[16rem] h-[16rem] mx-auto pb-4 mt-16">
          <EmptyData image={emptyCart.src} />

          <p
            className="bg-customeblue text-customeBlack text-base px-4 py-2 rounded-xl border-2 border-solid border-[#b7ccff]"
            role="status"
          >
            سبد خرید شما خالی است
          </p>

          <Link href="/" className="text-[#1677ff] text-xl my-4">
            <p>خانه</p>
          </Link>
        </div>
      )}
    </>
  );
};

export { CartContainer };
