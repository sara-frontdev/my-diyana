import { Metadata } from "next";

import { CartContainer } from "@/components/containers/CartContainer/CartContainer";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: " سبد خرید |  مهد کودک دیانا",
  description: "به مهد کودک دیانا خوش  آمدید",
};

const Cart = () => {
  return (
    <Suspense fallback={<p>درحال بازگزاری</p>}>
      <CartContainer />
    </Suspense>
  );
};

export default Cart;
