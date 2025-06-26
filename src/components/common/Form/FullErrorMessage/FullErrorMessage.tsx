"use client";

import { FC } from "react";
import { ErrorMessage } from "formik";

interface IPropType {
  name: string;
}

const FullErrorMessage: FC<IPropType> = ({ name }): JSX.Element => {
  return (
    <ErrorMessage
      name={name}
      render={(msg) => <p className="text-red-600 text-[12px] m-1">{msg}</p>}
    />
  );
};

export { FullErrorMessage };
