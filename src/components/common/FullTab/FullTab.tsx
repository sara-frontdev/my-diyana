"use client";

//base
import { FC } from "react";

//lib
import { Tabs } from "antd";

export interface ITabItems {
  key: string | number;
  label: string;
  count?: string | number | React.ReactNode;
  children: string | React.ReactNode;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  icon?: React.ReactNode;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  hidden?: boolean;
}

interface IPropType {
  items: ITabItems[];
  defaultActiveKey?: string;
  activeKey?: string;
  onChange?: (activeKey: string) => void;
  tabPosition?: "top" | "bottom" | "right" | "left";
  type?: "line" | "card" | "editable-card";
  centered?: boolean;
  size?: "small" | "middle" | "large";
}

const FullTab: FC<IPropType> = ({
  items,
  defaultActiveKey,
  activeKey,
  onChange,
  tabPosition = "top",
  type = "line",
  centered = true,
  size = "middle",
}) => {
  return (
    <Tabs
      defaultActiveKey={defaultActiveKey || undefined}
      // items={items.filter((item) => item?.hidden !== true) as any}
      items={
        items
          .filter((item) => item?.hidden !== true)
          .map((item) => ({
            ...item,
            label: (
              <span className="flex items-center gap-2">
                {item.label}
                {item.count !== undefined && (
                  <span className="bg-[#a1a3a8] text-white text-xs px-2 py-1 rounded-full">
                    {item.count === 0 ? "0" : item.count}
                  </span>
                )}
              </span>
            ),
          })) as any
      }
      activeKey={activeKey || undefined}
      onChange={onChange ? onChange : () => {}}
      centered={centered}
      tabPosition={tabPosition}
      type={type}
      size={size}
    />
  );
};

export { FullTab };
