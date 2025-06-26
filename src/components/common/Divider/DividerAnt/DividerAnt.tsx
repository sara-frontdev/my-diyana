//base
import { FC } from "react";

//lib
import { Divider } from "antd";
import { FaInfoCircle } from "react-icons/fa";

interface IPropType {
  text?: string;
  orientation?: "left" | "right" | "center";
  dashed?: boolean;
  type?: "horizontal" | "vertical";
  hasIcon?: boolean;
  icon?: React.ReactNode;
}

const DividerAnt: FC<IPropType> = ({
  text,
  orientation = "center",
  dashed = false,
  type = "horizontal",
  hasIcon = true,
  icon,
}) => {
  return (
    <>
      <Divider orientation={orientation} plain dashed={dashed} type={type}>
        <section className="flex justify-center items-center gap-x-2">
          {hasIcon ? (
            icon ? (
              icon
            ) : (
              <FaInfoCircle className="text-blue-600" />
            )
          ) : null}

          <span className="mt-1">{text ? text : "!"}</span>
        </section>
      </Divider>
    </>
  );
};

export { DividerAnt };
