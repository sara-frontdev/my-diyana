"use client";

export const useCopyToClipboard = () => {
  let result = {};

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      result = { state: "success" };
    } catch (e: any) {
      result = { state: "error", message: e.message };
      throw e;
    }
  };

  return [copy, result] as const;
};
