"use client";

import { FC } from "react";
import { AxiosResponse } from "axios";

// core
import { CourseUnitSelect } from "@/core/types/response/CourseUnitSelect.res";

// core

import { useShoppingCartContext } from "@/core/context/ShoppingCartContext";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { CustomButton } from "@/components/commonComponents/Button/CustomeButton/CustomeButton";
import { toastTextCartTypeEnum } from "@/core/enums/toastTextCart-type.enum";
import { useRequest } from "@/core/services/api/clinet/Payment.api";
import { transactionStateEnum } from "@/core/enums/transaction.enum";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";
import { usePathname } from "next/navigation";

interface IPropType {
  cartItem: CourseUnitSelect[];
}

const BasketCalculations: FC<IPropType> = ({ cartItem }) => {
  //var finalAmountSeparator
  const finalAmountSeparator = cartItem.find(
    (item) => item.finalAmountSeparator
  )?.finalAmountSeparator;

  // context
  const { cart } = useShoppingCartContext();
  const pathname = usePathname();

  //api
  const request = useRequest();

  const handleCartPaymnet = () => {
    request.mutate(cart.key, {
      onSuccess: (res: AxiosResponse<IAxiosResult>) => {
        if (transactionStateEnum.Success === res.data.result.status) {
          ShowToast(
            [toastTextCartTypeEnum.add],
            toastTypes.success,
            undefined,
            "topRight"
          );
          // تاخیر ۱ ثانیه‌ای قبل از رفتن به درگاه
          setTimeout(() => {
            window.location.href = res.data.result.urlGateWay;
          }, 1000);
        } else {
          ShowToast(
            ["اتصال به درگاه انجام نشد"],
            toastTypes.error,
            undefined,
            "topRight"
          );
        }
      },
    });
  };

  return (
    <div className=" bg-white  p-4 rounded-lg border border-solid border-[#e0e0e2]">
      <div className="flex justify-between  p-1 rounded-sm text-customeBlack border-b border-solid border-[#d9d9d9] pb-4">
        <div className="">
          <p className="pl-1 text-xl font-bold"> جمع هزینه کلاس </p>
        </div>

        <div className="flex">
          <p className="pl-1 text-xl font-bold">{finalAmountSeparator}</p>
          <span>تومان</span>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <CustomButton
          isPayment
          isCartPage={pathname === "/cart"}
          className="text-xl !border-none"
          handleClickPayment={handleCartPaymnet}
        />
      </div>
    </div>
  );
};

export { BasketCalculations };
