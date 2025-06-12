import { ReactNode } from "react";
import type { Metadata } from "next";

//styles
import {
  yekanBold,
  yekanFat,
  yekanHeavy,
  yekanMedium,
  yekanRegular,
} from "@/assets/Fonts/fonts";
import { UiProvider } from "@/components/provider/UiProvider/UiProvider";

export const metadata: Metadata = {
  title: "مهد کودک دیانا",
  description: "به آکادمی کودک دیانا ، بهشت کودکان خوش آمدید  ",
  keywords: "بهشت کودکان, آکادمی کودک, دیانا, مهد کودک",
  icons: {
    icon: "/logo.png", //!
  },

  openGraph: {
    siteName: " مهد کودک دیانا",
    type: "website",
    url: "my-diyana.vercel.app", //! ادرس سایت اصلی
    locale: "fa_IR",
    images: [
      {
        url: "https://my-diyana.vercel.app/images/logo.png", //! ادرس سایت اصلی
        alt: "لوگوی مهد کودک دیانا",
        width: 800,
        height: 600,
      },
    ],
  },
  alternates: {
    canonical: "https://my-diyana.vercel.app", //! ادرس سایت اصلی
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${yekanRegular.variable} ${yekanBold.variable} ${yekanMedium.variable} ${yekanFat.variable} ${yekanHeavy.variable}`}
    >
      <body>
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
