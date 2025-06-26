"use client";

// base
import { FC, Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

//common
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
const VerifyCodeContainer = dynamic(
  () =>
    import("./VerifyCodeContainer/VerifyCodeContainer").then(
      (mod) => mod.VerifyCodeContainer
    ),
  { ssr: false }
);
const FinalizeRegisterContainer = dynamic(
  () =>
    import("./FinalizeRegisterContainer/FinalizeRegisterContainer").then(
      (mod) => mod.FinalizeRegisterContainer
    ),
  { ssr: false }
);

//core
import { FullPageLoading } from "@/components/commonComponents/Loading/FullPageLoading/FullPageLoading";
import { RegisterStepIndex } from "@/core/enums/steper-indexComponent.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";

const RegisterContainer: FC = () => {
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
      title: "کد تایید",
      content: (
        <Suspense fallback={<FullPageLoading />}>
          <VerifyCodeContainer />
        </Suspense>
      ),
    },
    {
      title: "تکمیل ثبت نام",
      content: (
        <Suspense fallback={<FullPageLoading />}>
          <FinalizeRegisterContainer />
        </Suspense>
      ),
    },
  ];

  //activeStep
  const [activeStep, setActiveStep] = useState<RegisterStepIndex>(
    RegisterStepIndex.register
  );

  useEffect(() => {
    const newActiveStep =
      pathname === authUrlEnum.finalizeRegister
        ? RegisterStepIndex.finalizeRegister
        : pathname === authUrlEnum.verifyCode
        ? RegisterStepIndex.verifyCode
        : RegisterStepIndex.register;

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

export { RegisterContainer };
