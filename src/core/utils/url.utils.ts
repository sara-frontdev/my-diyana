"use client";

export const IsIncludes = (url1: string, url2: string): boolean => {
  return (
    url1.toLowerCase().includes(url2.toLowerCase()) ||
    url1.toLowerCase().includes(url2.toLowerCase() + "/") ||
    (url1.toLowerCase() + "/").includes(url2.toLowerCase())
  );
};
