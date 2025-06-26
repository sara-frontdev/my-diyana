import React from "react";
import DatePicker from "react-multi-date-picker";
import { useField, useFormikContext } from "formik";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

interface Props {
  name: string;
  label?: string;
  className?: string;
  multiple?: boolean;
  clearable?: boolean;
  labelText?: string;
  placeholder?: string;
  significant?: boolean;
}

const FullDatePicker: React.FC<Props> = ({
  name,
  label,
  className = "",
  multiple = false,
  clearable = false,
  labelText = "",
  placeholder = "",
  significant = true,
}) => {
  const [field, , helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div className={` ${className}`}>
      {label && <label className="block mb-1 text-right">{label}</label>}
      <DatePicker
        value={field.value}
        onChange={(date) => {
          setFieldValue(name, date);
          helpers.setTouched(true);
        }}
        calendar={persian}
        locale={persian_fa}
        multiple={multiple}
        placeholder={placeholder}
        calendarPosition="bottom-right"
        className="w-full text-right"
      />
    </div>
  );
};

export { FullDatePicker };
