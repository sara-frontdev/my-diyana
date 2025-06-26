import { FC, ReactNode } from "react";
import { Col, ColProps } from "antd";

interface IPropType extends ColProps {
  children: ReactNode;
}

const ColAnt: FC<IPropType> = ({ children, ...restProps }) => {
  return <Col {...restProps}>{children}</Col>;
};

export { ColAnt };
