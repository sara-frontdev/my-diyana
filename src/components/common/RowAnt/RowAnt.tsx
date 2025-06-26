import { FC, ReactNode } from "react";
import { Row } from "antd";

interface IPropType {
  children: ReactNode;
  gutter?: [number, number];
  className?: string;
}

const RowAnt: FC<IPropType> = ({
  children,
  gutter,
  className,
  ...restProps
}) => {
  return (
    <Row
      {...restProps}
      gutter={gutter ? gutter : [7, 7]}
      className={className ? className : ""}
    >
      {children}
    </Row>
  );
};

export { RowAnt };
