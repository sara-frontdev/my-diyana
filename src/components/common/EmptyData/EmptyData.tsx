//base
import { Empty } from "antd";
import { FC } from "react";

interface IPropType {
  description?: string;
  className?: string;
  image?: React.ReactNode | string;
}
const EmptyData: FC<IPropType> = ({ description, className, image }) => {
  return (
    <Empty
      description={description || ""}
      className={className || undefined}
      image={image || undefined}
    />
  );
};

export { EmptyData };
