import { FC } from "react";
import { Result } from "antd";

interface IPropType {
  status?: "success" | "error" | "info" | "warning" | "404" | "403" | "500";
  title: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  extra?: JSX.Element;
}

const ConfirmChecker: FC<IPropType> = ({ status, title, subTitle, extra }) => {
  return (
    <>
      <Result
        status={status}
        title={title}
        subTitle={subTitle ? subTitle : undefined}
        extra={extra ? extra : undefined}
        className="!p-1"
      />
    </>
  );
};

export { ConfirmChecker };
