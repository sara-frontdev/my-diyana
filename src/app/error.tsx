"use client";

import { useRouter } from "next/navigation";
import { IoMdAlert, IoMdRefresh } from "react-icons/io";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <section className="flex flex-col items-center justify-center h-screen dark:bg-gray-900 dark:text-white px-4">
      <IoMdAlert size={80} className="text-red-600 mb-6 animate-bounce" />

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">
        مشکلی پیش آمده است!
      </h1>

      <p className="text-center text-lg mb-6 max-w-md">
        در حال حاضر مشکلی در سامانه به وجود آمده است. لطفاً کمی بعد دوباره
        امتحان کنید یا با پشتیبانی تماس بگیرید.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
        >
          <IoMdRefresh size={20} />
          بازگشت به صفحه اصلی
        </button>

        <button
          onClick={reset}
          className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded transition"
        >
          <IoMdRefresh size={20} />
          تلاش مجدد
        </button>
      </div>

      {process.env.NODE_ENV === "development" && (
        <pre className="mt-6 p-4 bg-gray-800 text-white rounded max-w-md overflow-auto text-sm">
          {error.message}
          <br />
          {error.digest}
        </pre>
      )}
    </section>
  );
}
