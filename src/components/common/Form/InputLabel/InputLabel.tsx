//base
import { FC } from "react";

//components
import { FullTooltip } from "../FullTooltip/FullTooltip";

//lib
import { IoInformationCircleOutline } from "react-icons/io5";

interface IPropType {
  name: string;
  labelText?: string | React.ReactNode;
  isVertical?: boolean;
  hasInfo?: boolean;
  infoTitle?: string | React.ReactNode;
  significant?: boolean;
  forSearching?: boolean;
}

const InputLabel: FC<IPropType> = ({
  labelText,
  isVertical = true,
  hasInfo,
  infoTitle,
  significant,
  forSearching,
}): JSX.Element => {
  return (
    <>
      {labelText && (
        <span className={`mx-1 block h-auto ${isVertical && "mb-[6px]"}`}>
          <strong className="text-[11px]">{labelText}</strong>

          {significant ? (
            <span className="text-red-500 m-0.5">*</span>
          ) : (
            !forSearching && (
              <span className="text-[11px] text-cyan-700 mx-1">(اختیاری)</span>
            )
          )}

          {hasInfo && (
            <FullTooltip title={infoTitle || "!"} placement="top">
              <IoInformationCircleOutline
                size={25}
                className="text-sky-700 cursor-pointer"
              />
            </FullTooltip>
          )}
        </span>
      )}
    </>
  );
};

export { InputLabel };
