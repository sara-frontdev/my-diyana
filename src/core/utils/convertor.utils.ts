"use client";
import { Big } from "big.js";

// ConvertToSepratorNumber
export function ConvertToSepratorNumber(inputValue: string): {
  pureValue: number;
  sepratorValue: string;
} {
  if (!inputValue) return { pureValue: 0, sepratorValue: "0" };

  // Remove all non-numeric characters
  const numericString = inputValue?.toString()?.replace(/\D/g, "");

  // separators
  const sepratorValue = numericString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Convert to BigInt
  const pureValue = new Big(numericString).toNumber();

  return { pureValue, sepratorValue };
}

export const convertStringToDate = (inputValue: string): string => {
  // Remove any non-numeric characters
  inputValue = inputValue.replace(/\D/g, "");

  // Insert '/' at appropriate positions
  if (inputValue.length > 4 && inputValue.charAt(4) !== "/") {
    inputValue = inputValue.slice(0, 4) + "/" + inputValue.slice(4);
  }
  if (inputValue.length > 7 && inputValue.charAt(7) !== "/") {
    inputValue = inputValue.slice(0, 7) + "/" + inputValue.slice(7);
  }

  // Limit the input length to 10 characters (YYYY/MM/DD)
  inputValue = inputValue.slice(0, 10);

  return inputValue;
};
