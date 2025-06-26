"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { useQuery } from "@tanstack/react-query";

import {
  getItemGeneric,
  setItemGeneric,
} from "../services/common/storage.service";
import { storageTypeEnum } from "../enums/storage-type.enum";

import { IGetActiveCourseUnitSelectsByStudentResult } from "../types/response/CourseUnitSelect.res";
import { GetActiveCourseUnitSelectsByStudent } from "../services/api/clinet/CourseUnitSelect.api";
import { isUserLoggedIn } from "../services/authentication/authentication.service";

interface IShoppingCartContextProps {
  cart: IGetActiveCourseUnitSelectsByStudentResult;

  setCart: Dispatch<SetStateAction<IGetActiveCourseUnitSelectsByStudentResult>>;

  refetchActiveCourseUnitSelectsByStudent: () => void;
}

const ShoppingCartContext = createContext({} as IShoppingCartContextProps);

export const ShoppingCartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const initialState: IGetActiveCourseUnitSelectsByStudentResult =
    getItemGeneric(storageTypeEnum.localStorage, "cart") ?? {
      id: 0,
      userId: 0,
      key: "",
      finalAmount: 0,
      finalAmountSeparator: "",
      isOpen: false,
      transactionState: 0,
      transactionStateTitle: "",
      courseUnitSelects: [],
    };

  const [cart, setCart] =
    useState<IGetActiveCourseUnitSelectsByStudentResult>(initialState);

  const isLogged = isUserLoggedIn();

  // باید این api کال کنم که کانتکسم همیشه برور باشه یعنی اگرچیزی حذف کردم یا اضافه سریغ نشون بده
  //  باید کانتکست رو آپدیت کنی
  // که تغییرات و نشون بده
  // / API برای گرفتن سبد خرید فعال از سرور
  // const getActiveCarts = useGetActiveCourseUnitSelectsByStudent();

  const {
    isSuccess,
    data,
    refetch: refetchActiveCourseUnitSelectsByStudent,
  } = useQuery({
    queryKey: ["active-cart"],
    queryFn: GetActiveCourseUnitSelectsByStudent,
    enabled: isLogged, // فقط وقتی لاگین بود اجرا شه
  });

  // update  data in another website
  // وقتی کاربر لاگین باشه، سبد خرید رو از سرور می‌گیره و آپدیت می‌کنه
  // به جای اینکه از لوکال استورچ بخونه، میره از سرور اطلاعات سبد خرید کاربر رو می‌گیره. یعنی:
  // یعنی اطلاعات لحظه‌ای و واقعی کاربر از سرور میاد (نه از حافظه لوکال مرورگر).

  useEffect(() => {
    if (isLogged && isSuccess && data) {
      setCart(data.data.result);
    } else {
      // اگر لاگین نباشه، سبد خرید رو تو localStorage ذخیره می‌کنه
      setItemGeneric(storageTypeEnum.localStorage, "cart", cart);
    }
  }, [isLogged && isSuccess && data]);

  // Save the cart state to localStorage whenever it changes
  // ذخیره سبد خرید در لوکال استورج هر بار که سبد تغییر کنه
  // useEffect(() => {
  //   setItemGeneric(storageTypeEnum.localStorage, "cart", cart);
  // }, [cart]);

  return (
    <ShoppingCartContext.Provider
      value={{ cart, setCart, refetchActiveCourseUnitSelectsByStudent }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCartContext = () => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error(
      "useShoppingCart must be used within a ShoppingCartProvider"
    );
  }
  return context;
};
