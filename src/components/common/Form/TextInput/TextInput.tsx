"use client";

//base
import { FC } from "react";

//lib
import { useField, useFormikContext } from "formik";
import { Input, InputProps } from "antd";
import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

//components
import { InputLabel } from "../InputLabel/InputLabel";
import { FullErrorMessage } from "../FullErrorMessage/FullErrorMessage";

//core
import { ITextInputProps } from "@/core/types/props/textInput.props";
import { textInputType } from "@/core/enums/textInput-type.enum";
import {
  convertStringToDate,
  ConvertToSepratorNumber,
} from "@/core/utils/convertor.utils";
import { PersianToEnglish } from "@/core/hooks/PersianToEnglish";

// import {
//   convertStringToDate,
//   ConvertToSepratorNumber,
// } from "@/core/utils/convertor.utils";
// import { ITextInputProps } from "@/core/types/props/textInput.props";
// import { PersianToEnglish } from "@/core/hooks/PersianToEnglish";

export interface ITextType {
  type?: textInputType.text;
}

export interface IPassType {
  type?: textInputType.password;
}

type ICombinedPageType = ITextInputProps & (ITextType | IPassType);

const TextInput: FC<ICombinedPageType> = ({
  autoFocus,
  className,
  clearable,
  disabled,
  forSearching,
  labelText,
  name,
  onChange,
  onKeyDown,
  placeholder,
  seprator,
  showCount,
  maxCount,
  significant,
  singleSpace,
  type,
  value,
  setToFormik = true,
  dateMask,
  isNumber,
  hasValidionUi = true,
  hasInfo,
  infoTitle,
  changeCountMode,
  addonAfter,
  addonBefore,
  size = "middle",
}): JSX.Element => {
  //formik context
  const { setFieldValue } = useFormikContext();
  const [Feild, meta] = useField({ name });

  //var
  const isNegative = (isNumber || seprator) && (value ? value : meta.value) < 0;

  //inputPropsObj
  const inputPropsObj: InputProps = {
    name: name,

    spellCheck: true,

    count: {
      show: showCount,
      max: maxCount,
    },

    className: `
      !w-full  
      ${className || undefined}
      ${
        !meta.error &&
        meta.touched &&
        !forSearching &&
        !disabled &&
        "valid-from"
      }
      ${meta.error && meta.touched && !forSearching && "invalid-from"}
      ${changeCountMode && "!text-center"}
      ${type === textInputType.password && "!dir-ltr"}
    `,

    status: isNegative ? "warning" : undefined,

    size,

    autoFocus: autoFocus,

    allowClear: clearable,

    disabled: disabled,

    placeholder: placeholder
      ? placeholder
      : forSearching
      ? `جستجو در ${labelText} ....`
      : labelText
      ? `لطفا ${labelText} را وارد کنید `
      : "",

    value:
      isNumber || changeCountMode
        ? ConvertToSepratorNumber(value ? value : meta.value).pureValue
        : seprator
        ? ConvertToSepratorNumber(value ? value : meta.value).sepratorValue
        : value
        ? value
        : meta.value
        ? meta.value
        : dateMask
        ? "--/--/----"
        : undefined,

    onChange: (
      param: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      let inputValue: string | number = param.target.value;

      inputValue = PersianToEnglish(inputValue);

      if (seprator || isNumber || changeCountMode) {
        if (inputValue.startsWith("0") && inputValue.length > 1) {
          inputValue = inputValue.replace(/^0+/, "");
        }

        const { pureValue } = ConvertToSepratorNumber(inputValue);

        inputValue = pureValue as number;
      }

      if (singleSpace) {
        inputValue = String(inputValue).replace(/\s+/g, " ");
      }

      if (dateMask) {
        inputValue = convertStringToDate(String(inputValue));
      }

      if (onChange) {
        onChange(inputValue);
      }

      if (setToFormik) {
        setFieldValue(name, inputValue);
      }
    },

    onKeyDown: onKeyDown || undefined,

    addonAfter: addonAfter ?? (isNegative ? <p>منفی</p> : undefined),
    addonBefore: addonBefore,
  };

  return (
    <>
      {/* --- InputLabel --- */}
      <InputLabel
        name={name}
        labelText={labelText}
        hasInfo={hasInfo}
        infoTitle={infoTitle}
        significant={significant}
        forSearching={forSearching}
      />

      {/* --- input --- */}
      <section className={hasValidionUi ? "pb-3" : ""}>
        {type === textInputType.password ? (
          <Input.Password
            {...inputPropsObj}
            iconRender={(visible: boolean) => {
              const Icon = visible ? BsEye : FiEyeOff;
              return <Icon className="cursor-pointer" size={20} />;
            }}
          />
        ) : (
          <Input {...inputPropsObj} />
        )}

        {/* --- CustomeErrorMessage --- */}
        <FullErrorMessage name={name} />
      </section>
    </>
  );
};

export { TextInput };
