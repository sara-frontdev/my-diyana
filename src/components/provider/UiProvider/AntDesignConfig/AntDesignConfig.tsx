import { FC } from "react";
import { ConfigProvider } from "antd";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import fa_IR from "antd/lib/locale/fa_IR";

interface IPropType {
  children: React.ReactNode;
}
const AntDesignConfig: FC<IPropType> = ({ children }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        locale={fa_IR}
        direction={"rtl"}
        theme={{
          token: {
            fontSize: 14,
            fontFamily: "var(--font-yekan-regular)",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export { AntDesignConfig };
