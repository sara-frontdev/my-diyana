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

// components
import { UiProvider } from "@/components/provider/UiProvider/UiProvider";
import { CoreProvider } from "@/components/provider/CoreProvider/CoreProvider";

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
        <CoreProvider>
          <UiProvider>{children}</UiProvider>
        </CoreProvider>
      </body>
    </html>
  );
}
