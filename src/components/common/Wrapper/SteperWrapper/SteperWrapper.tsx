"use client";

//base
import { FC } from "react";

//lib
import { Steps } from "antd";

//components
import { FullButton } from "../../Form/FullButton/FullButton";

//core
import { buttonTypeEnum } from "@/core/enums/button.enum";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export interface IStepType {
  title: string;
  subTitle?: string;
  status?: "process" | "wait" | "finish" | "error" | undefined;
  className?: string;
  content: string | React.ReactNode;
  icon?: string | React.ReactNode;
  onClick?: () => void;
}
interface IPropType {
  steps: IStepType[];
  direction?: "horizontal" | "vertical";
  labelPlacement?: "horizontal" | "vertical";
  moveAble?: boolean;
  finishOnClick?: () => void;
  canBack?: boolean;
  activeStep?: number;
  className?: string;
}

const SteperWrapper: FC<IPropType> = ({
  steps,
  direction = "horizontal",
  labelPlacement = "horizontal",
  finishOnClick,
  moveAble = true,
  canBack = true,
  activeStep = 0,
  className,
}) => {
  //actice step components
  let current = activeStep;

  //check has this important array
  if (!steps) return;

  return (
    <>
      {/* --- step navigation bar --- */}
      <Steps
        className={`mt-4 ${className || undefined}`}
        direction={direction}
        current={current}
        items={steps.map((item) => ({
          key: item.title,
          ...item,
        }))}
        labelPlacement={labelPlacement}
        responsive
      />

      {/* --- step content--- */}
      <section>{steps[current].content}</section>

      {/* --- button part --- */}
      {moveAble && (
        <section className="flex justify-between items-center gap-2">
          {current < steps.length - 1 && (
            <FullButton
              btnText="مرحله ‌بعد"
              type={buttonTypeEnum.button}
              icon={<BsArrowLeftCircle className="text-white text-lg" />}
              onClick={() => (current = current + 1)}
            />
          )}

          {current === steps.length - 1 && (
            <FullButton
              btnText="تکمیل فرآیند"
              type={buttonTypeEnum.button}
              className="!bg-green-500 hover:!bg-green-400"
              onClick={finishOnClick}
            />
          )}

          {canBack && current > 0 && (
            <FullButton
              btnText="مرحله قبل"
              type={buttonTypeEnum.button}
              icon={<BsArrowRightCircle className="text-white text-lg" />}
              onClick={() => (current = current - 1)}
            />
          )}
        </section>
      )}
    </>
  );
};

export { SteperWrapper };
