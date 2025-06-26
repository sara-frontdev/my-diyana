//base
import { FC } from "react";

//lib
import { Tooltip } from "antd";

interface IPropType {
  children: React.ReactNode;
  title: string | React.ReactNode;
  placement?:
    | "top"
    | "left"
    | "right"
    | "bottom"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
    | "leftTop"
    | "leftBottom"
    | "rightTop"
    | "rightBottom";
  color?:
    | "blue"
    | "purple"
    | "cyan"
    | "green"
    | "magenta"
    | "pink"
    | "red"
    | "orange"
    | "yellow"
    | "volcano"
    | "geekblue"
    | "lime"
    | "gold"
    | "blue-inverse"
    | "purple-inverse"
    | "cyan-inverse"
    | "green-inverse"
    | "magenta-inverse"
    | "pink-inverse"
    | "red-inverse"
    | "orange-inverse"
    | "yellow-inverse"
    | "volcano-inverse"
    | "geekblue-inverse"
    | "lime-inverse"
    | "gold-inverse";
}

const FullTooltip: FC<IPropType> = ({ children, title, placement, color }) => {
  return (
    <Tooltip
      title={title || "!"}
      placement={placement || "top"}
      color={color || undefined}
    >
      {children}
    </Tooltip>
  );
};

export { FullTooltip };
