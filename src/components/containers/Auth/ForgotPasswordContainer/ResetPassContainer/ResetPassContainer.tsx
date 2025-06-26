//base
import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

//lib
import { Form, Formik } from "formik";

//components
import { AddSection } from "./AddSection/AddSection";

//core
import { IResetPasswordValues } from "@/core/types/formikValues/ForgotPassword/ForgotPass.values";
import { ResetPassValidation } from "@/core/validations/ForgotPass/ResetPass.validation";
import { useResetPassword } from "@/core/services/api/clinet/ForgotPass.api";
import { toastTypes } from "@/core/enums/toast-types.enum";
import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { ShowToast } from "@/core/hooks/Notifications";

const ResetPassContainer: FC = () => {
  //hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  const param_userName = searchParams.get("userName");

  //*** چک میکنه ک بدون تکمیل مراحل قبلی وارد این مرحله نشه
  useEffect(() => {
    if (!param_userName) {
      router.replace(authUrlEnum.forgotPassword);
    }
  }, []);

  //states
  const [initialValues] = useState<IResetPasswordValues>({
    password: "",
  });
  const [otpCode, setOtpCode] = useState<string>("");

  //api
  const setMutation = useResetPassword();

  //onSubmit
  const onSubmit = (values: IResetPasswordValues) => {
    setMutation.mutate(
      {
        userName: String(param_userName),
        password: values.password,
        code: otpCode,
      },
      {
        onSuccess: () => {
          ShowToast(["رمز عبور شما با موفقیت تغییر یافت"], toastTypes.success);

          setTimeout(() => {
            router.push(authUrlEnum.login);
          }, 1000);
        },
      }
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ResetPassValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <section className="mt-4">
            <AddSection
              setOtpCode={setOtpCode}
              isLoading={setMutation.isLoading}
              otpCode={otpCode}
            />
          </section>
        </Form>
      )}
    </Formik>
  );
};

export { ResetPassContainer };
