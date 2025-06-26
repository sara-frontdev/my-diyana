"use client";

//base
import { FC } from "react";
import Image from "next/image";

//lib
import { Empty, Select } from "antd";
import { useField, useFormikContext } from "formik";

//components
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";
//core
import { ISelectOption } from "@/core/models/general.model";

//assets
import { IFullSelectOptionPropsTypes } from "@/core/types/props/FullSelectOption.props";
import { selectOptionType } from "@/core/enums/selectOption-type.enum";
import search_icon from "$/images/general/search-icon.webp";

const FullSelectOption: FC<IFullSelectOptionPropsTypes> = ({
  type = selectOptionType.single,
  className,
  variant = "outlined",
  virtual = true,
  placement = "bottomRight",
  name,
  options,
  isLoading,
  disabled,
  clearable,
  autoFocus,
  placeholder,
  defaultValue,
  value,
  onChange,
  onDeselect,
  labelText,
  noResultText,
  maxCount,
  maxTagCount = "responsive",
  defaultOpen,
  significant = true,
  forSearching,
  setToFormik = true,
}): JSX.Element => {
  //formik context
  const { setFieldValue } = useFormikContext();
  const [Feild, meta] = useField({ name });

  // Filter base on (option.label)
  const filterOption = (
    input: string,
    option?: { label: string; value: number }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  return (
    <>
      {/* =========== InputLabel ======== */}
      <InputLabel
        name={name}
        labelText={labelText}
        significant={significant}
        forSearching={forSearching}
      />

      {/* =========== input ======== */}
      <section className="pb-3">
        <Select
          mode={type ? type : (selectOptionType.single as any)}
          className={`!w-full ${className || undefined} `}
          variant={variant}
          virtual={virtual}
          maxCount={maxCount || undefined}
          maxTagCount={maxTagCount}
          labelInValue
          showSearch
          optionFilterProp="children"
          filterOption={filterOption as any}
          allowClear={clearable}
          loading={isLoading}
          autoFocus={autoFocus}
          disabled={disabled}
          placement={placement}
          options={options as any}
          defaultActiveFirstOption
          defaultValue={defaultValue}
          value={value ? value : meta.value ? meta.value : undefined}
          onChange={(_, option?: ISelectOption | ISelectOption[]) => {
            if (setToFormik) {
              setFieldValue(name, option);
            }

            if (onChange) {
              onChange(option);
            }
          }}
          onDeselect={(_, option: ISelectOption) => {
            if (onDeselect) {
              onDeselect(option);
            }
          }}
          status={
            meta.error && meta.touched && significant && !forSearching
              ? "error"
              : undefined
          }
          defaultOpen={defaultOpen}
          placeholder={placeholder ? placeholder : "موردی را انتخاب کنید ..."}
          notFoundContent={
            <>
              <Empty className="w-1/3 mx-auto text-xs py-1" description="" />
              <p className="font-bold text-center px-3">
                {noResultText ? noResultText : "متاسفانه هیچ داده‌ای یافت نشد!"}
              </p>
            </>
          }
          dropdownRender={(menu) =>
            isLoading ? (
              <section className="flex flex-col justify-center items-center gap-1">
                <Image
                  src={search_icon.src}
                  alt="search-icon"
                  width={150}
                  height={100}
                />
                <p className="font-bold text-center px-3">
                  درحال جستجو، لطفا اندکی منتظر بمانید.
                </p>
              </section>
            ) : (
              menu
            )
          }
        />

        {/* ---- CustomeErrorMessage ---- */}
        <FullErrorMessage name={name} />
      </section>
    </>
  );
};

export { FullSelectOption };
