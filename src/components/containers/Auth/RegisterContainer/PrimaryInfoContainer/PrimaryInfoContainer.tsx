//base
import { FC, useState } from "react";
import { useRouter } from "next/navigation";

//lib
import { Form, Formik } from "formik";

//common

//components
import { AddSection } from "./AddSection/AddSection";

//core
import { IRegisterValues } from "@/core/types/formikValues/Register/Register.values";
import { PrimaryInfoValidation } from "@/core/validations/Register/PrimaryInfo.validations";
import { useRegister } from "@/core/services/api/clinet/Register.api";
import { authUrlEnum } from "@/core/enums/auth-url.enum";

const PrimaryInfoContainer: FC = () => {
  const [initialValues] = useState<IRegisterValues>({
    userName: "",
  });

  //hooks
  const router = useRouter();

  //api
  const setMutation = useRegister();

  //setMutation
  const onSubmit = (values: IRegisterValues) => {
    setMutation.mutate(
      {
        userName: values.userName,
        phoneNumber: values.userName,
      },
      {
        onSuccess: () => {
          router.push(`${authUrlEnum.verifyCode}?userName=${values.userName}`);
        },
      }
    );
  };
  return (
    <Formik
      initialValues={initialValues}
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
