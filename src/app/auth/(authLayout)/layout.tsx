//base
import { ReactNode } from "react";

//core
import { AuthLayout } from "@/components/layout/AuthLayout/AuthLayout";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
