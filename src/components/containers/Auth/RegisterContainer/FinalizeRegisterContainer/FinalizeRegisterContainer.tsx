//base
import { FC, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

//components
import { AddSection } from "./AddSection/AddSection";

//lib
import { Form, Formik } from "formik";

//core
import { IFinalizeRegisterValues } from "@/core/types/formikValues/Register/IFinalizeRegister.values";
import { FinalizeRegisterValidation } from "@/core/validations/Register/FinalizeRegister.validation";

import { authUrlEnum } from "@/core/enums/auth-url.enum";
import { useFinalizeRegister } from "@/core/services/api/clinet/Register.api";

const FinalizeRegisterContainer: FC = () => {
  //hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  const param_userName = searchParams.get("userName");
  const param_code = searchParams.get("code");

  //*** چک میکنه ک بدون تکمیل مراحل قبلی وارد این مرحله نشه
  useEffect(() => {
    if (!param_userName && !param_code) {
      router.replace(authUrlEnum.register);
    }
  }, []);

  //states
  const [initialValues] = useState<IFinalizeRegisterValues>({
    userName: String(param_userName),
    name: "",
    lastName: "",
    password: "",
    passwordConfirmation: "",
  });

  //api
  const setMutation = useFinalizeRegister();

  //setMutation
  const onSubmit = (values: IFinalizeRegisterValues) => {
    setMutation.mutate(
      {
        code: String(param_code),
        userName: values.userName,
        name: values.name,
        lastName: values.lastName,
        password: values.password,
      },
      {
        onSuccess: () => {
          router.push(
            `${authUrlEnum.welcoming}?fullName=${values.name} ${values.lastName}`
          );
        },
      }
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FinalizeRegisterValidation}
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

export { FinalizeRegisterContainer };
