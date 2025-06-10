import { CMSLayout } from "@/components/layout/CMSLayout/CMSLayout";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <CMSLayout>{children}</CMSLayout>;
};

export default layout;
