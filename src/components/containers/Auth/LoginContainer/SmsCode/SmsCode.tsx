//base
import { FC, Suspense, useState } from "react";

//lib
import { Form, Formik } from "formik";
import { AxiosResponse } from "axios";

//components
import { AddSection } from "./AddSection/AddSection";

//core
import { LogInByCodeValidation } from "@/core/validations/LogIn/LogInByCode.validation";
import { ILogInBycodeValues } from "@/core/types/formikValues/LogIn/LogIn.values";
import { useLoginValidationCode } from "@/core/services/api/clinet/Login.api";
import { successLoginWithServiceTokenFun } from "@/core/hooks/login.hook";
import { IGetTokenOrLoginResult } from "@/core/types/response/Login.res";
import { IAxiosResult } from "@/core/models/axios-result.model";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { ShowToast } from "@/core/hooks/Notifications";

const SmsCode: FC = () => {
  const [initialValues] = useState<ILogInBycodeValues>({
    userName: "",
    code: "",
  });

  //api
  const setLogIn = useLoginValidationCode();

  //فانکشن لاگین
  const onSubmit = (values: ILogInBycodeValues) => {
    setLogIn.mutate(
      {
        userName: values.userName,
        code: values.code,
      },
      {
        onSuccess: (apiRes: AxiosResponse<IAxiosResult>) => {
          const result: IGetTokenOrLoginResult = apiRes.data.result;
          const service_token = result.accessToken;
          const refreshToken = result.refreshToken;

          {
            if (service_token) {
              successLoginWithServiceTokenFun(service_token, refreshToken, "/");
            } else {
              ShowToast(
                ["مشکلی پیش آمده است به پشتیبانی گزارش دهید"],
                toastTypes.error
              );
            }
          }
        },
      }
    );
  };

  return (
    <Suspense>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={onSubmit}
        validationSchema={LogInByCodeValidation}
      >
        <Form>
          <AddSection isLoading={setLogIn.isLoading} />
        </Form>
      </Formik>
    </Suspense>
  );
};

export { SmsCode };
