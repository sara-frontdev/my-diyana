//base
import { FC, useState } from "react";

//lib
import { Form, Formik } from "formik";
import Link from "next/link";

//components
import { AddSection } from "./AddSection/AddSection";

//core
import { IGetTokenOrLoginResult } from "@/core/types/response/Login.res";
import { ILogInValues } from "@/core/types/formikValues/LogIn/LogIn.values";
import { LogInValidation } from "@/core/validations/LogIn/LogIn.validation";
import { successLoginWithServiceTokenFun } from "@/core/hooks/login.hook";
import { useLogin } from "@/core/services/api/clinet/Login.api";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";

const PasswordCode: FC = () => {
  const [initialValues] = useState<ILogInValues>({
    userName: "",
    password: "",
  });

  //api
  const setMutation = useLogin();

  //onSubmit
  const onSubmit = (values: ILogInValues) => {
    setMutation.mutate(
      {
        userName: values.userName,
        password: values.password,
      },
      {
        onSuccess: (value) => {
          const result: IGetTokenOrLoginResult = value.data.result;

          const accessToken = result.accessToken;
          const refreshToken = result.refreshToken;

          if (accessToken) {
            successLoginWithServiceTokenFun(accessToken, refreshToken, "/");
          } else {
            ShowToast(
              ["مشکلی پیش آمده است به پشتیبانی گزارش دهید"],
              toastTypes.error
            );
          }
        },
      }
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      onSubmit={onSubmit}
      validationSchema={LogInValidation}
    >
      {() => (
        <Form className="flex flex-col h-full justify-between">
          <div className="flex-grow">
            <AddSection isLoading={setMutation.isLoading} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export { PasswordCode };
