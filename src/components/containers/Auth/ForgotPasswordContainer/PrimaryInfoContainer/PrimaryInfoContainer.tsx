//base
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

//components
import { AddSection } from "./AddSection/AddSection";

//lib
import { Form, Formik } from "formik";

//core
import { IForgotPassValues } from "@/core/types/formikValues/ForgotPassword/ForgotPass.values";
import { PrimaryInfoValidation } from "@/core/validations/Register/PrimaryInfo.validations";
import { useForgotPassword } from "@/core/services/api/clinet/ForgotPass.api";
import { authUrlEnum } from "@/core/enums/auth-url.enum";

const PrimaryInfoContainer: FC = () => {
  const [initialValues] = useState<IForgotPassValues>({
    userName: "",
  });

  //router
  const router = useRouter();

  //api
  const setMutation = useForgotPassword();

  //onSubmit
  const onSubmit = (values: IForgotPassValues) => {
    setMutation.mutate(
      {
        userName: values.userName,
      },
      {
        onSuccess: () => {
          router.push(
            `${authUrlEnum.resetPassword}?userName=${values.userName}`
          );
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize
      validationSchema={PrimaryInfoValidation}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <section className="mt-4">
            <AddSection isLoading={setMutation.isLoading} />
          </section>
        </Form>
      )}
    </Formik>
  );
};

export { PrimaryInfoContainer };
