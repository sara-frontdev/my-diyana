"use client";

//base
import dynamic from "next/dynamic";
import { FC, Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

//common
import { FullPageLoading } from "@/components/commonComponents/Loading/FullPageLoading/FullPageLoading";
import {
  IStepType,
  SteperWrapper,
} from "@/components/common/Wrapper/SteperWrapper/SteperWrapper";

//components
const PrimaryInfoContainer = dynamic(
  () =>
    import("./PrimaryInfoContainer/PrimaryInfoContainer").then(
      (mod) => mod.PrimaryInfoContainer
    ),
  { ssr: false }
);

const ResetPassContainer = dynamic(
  () =>
    import("./ResetPassContainer/ResetPassContainer").then(
      (mod) => mod.ResetPassContainer
    ),
  { ssr: false }
);

//core
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { ForgotPasswordStepIndex } from "@/core/enums/steper-indexComponent.enum";

const ForgotPasswordContainer: FC = () => {
  //hooks
  const pathname = usePathname();

  //stepItems
  const stepItems: IStepType[] = [
    {
      title: "اطلاعات پایه‌ای",
      content: (
        <Suspense fallback={<FullPageLoading />}>
          <PrimaryInfoContainer />
        </Suspense>
      ),
    },
    {
      title: "دریافت رمزعبور جدید",
      content: (
        <Suspense fallback={<FullPageLoading />}>
          <ResetPassContainer />
        </Suspense>
      ),
    },
  ];

  //activeStep
  const [activeStep, setActiveStep] = useState<ForgotPasswordStepIndex>(
    ForgotPasswordStepIndex.forgotPassword
  );

  useEffect(() => {
    const newActiveStep =
      pathname === authUrlEnum.resetPassword
        ? ForgotPasswordStepIndex.resetPassword
        : ForgotPasswordStepIndex.forgotPassword;

    setActiveStep(newActiveStep);
  }, [pathname]);

  return (
    <SteperWrapper
      direction="horizontal"
      steps={stepItems}
      moveAble={false}
      activeStep={activeStep}
    />
  );
};

export { ForgotPasswordContainer };
