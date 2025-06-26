"use client";

//base
import { FC, ReactNode } from "react";

//lib
import { Button } from "antd";

import { FiEdit2 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { BsTrash2 } from "react-icons/bs";

// core
import {
  btnTextTypeEnum,
  buttonStyleType,
  buttonTypeEnum,
} from "@/core/enums/button.enum";

interface IPropType {
  className?: string;
  size?: "small" | "middle" | "large";
  shape?: "default" | "circle" | "round";
  centered?: boolean;
  wraped?: boolean;

  hasBaseBtn?: boolean;
  type?: buttonTypeEnum;
  btnText?: string | boolean;
  styleType?: buttonStyleType;
  isLoading?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;

  isSearchAble?: boolean;
  searchBtnType?: buttonTypeEnum;
  searchIcon?: ReactNode;
  searchIsLoading?: boolean;
  searchOnClick?: () => void;
  searchBtnText?: string | boolean;
  searchBtnClassName?: string;

  isClearAble?: boolean;
  clearBtnType?: buttonTypeEnum;
  clearIcon?: ReactNode;
  clearIsLoading?: boolean;
  clearOnClick?: () => void;
  clearBtnText?: string | boolean;
  clearBtnClassName?: string;
}

const FullButton: FC<IPropType> = ({
  className,
  size = "middle",
  shape = "default",
  centered,
  wraped = true,

  hasBaseBtn = true,
  type = buttonTypeEnum.submit,
  btnText,
  styleType,
  isLoading,

  onClick,
  disabled,

  isSearchAble,
  searchBtnType = buttonTypeEnum.button,
  searchIcon,
  searchIsLoading,
  searchOnClick,
  searchBtnText,
  searchBtnClassName,

  isClearAble,
  clearBtnType = buttonTypeEnum.button,
  clearIcon,
  clearIsLoading,
  clearOnClick,
  clearBtnText,
  clearBtnClassName,
}) => {
  return (
    <section
      className={`flex ${wraped ? "flex-wrap" : ""} ${
        centered ? "justify-center" : "justify-start"
      } items-center gap-2`}
    >
      {hasBaseBtn && (
        <Button
          htmlType={type ? type : "submit"}
          size={size}
          type={styleType ? styleType : buttonStyleType.primary}
          shape={shape}
          className={`flex justify-center items-center !px-4 ${
            className || ""
          }`}
          // icon={icon ? icon : <Edit2 size={14} />}
          icon={
            clearIcon === undefined ? null : clearIcon || <FiEdit2 size={14} />
          }
          loading={isLoading}
          onClick={onClick ? onClick : () => {}}
          disabled={disabled}
        >
          {btnText ? btnText : btnTextTypeEnum.add}
        </Button>
      )}

      {isSearchAble && (
        <Button
          type="primary"
          htmlType={searchBtnType}
          shape={shape}
          className={`flex justify-center items-center bg-green-700 hover:bg-green-600 !px-4 ${
            searchBtnClassName || ""
          }`}
          icon={searchIcon ? searchIcon : <CiSearch size={16} />}
          loading={searchIsLoading}
          onClick={searchOnClick ? searchOnClick : () => {}}
        >
          {searchBtnText ? searchBtnText : btnTextTypeEnum.search}
        </Button>
      )}

      {isClearAble && (
        <Button
          type="dashed"
          htmlType={clearBtnType}
          shape={shape}
          className={`flex justify-center items-center !border-sky-700  !px-4 ${
            clearBtnClassName || ""
          }`}
          icon={
            clearIcon === undefined ? null : clearIcon || <BsTrash2 size={16} />
          }
          loading={clearIsLoading}
          onClick={clearOnClick ? clearOnClick : () => {}}
        >
          {clearBtnText ? clearBtnText : btnTextTypeEnum.delete}
        </Button>
      )}
    </section>
  );
};

export { FullButton };
