import { isValidIranianPhoneNumber } from "@/core/utils/check-identity.utils";
import * as Yup from "yup";

export const LogInValidation = Yup.object().shape({
  userName: Yup.string()
    .required("این فیلد باید پر شود!")
    .test("userName", "لطفا شماره همراه معتبر وارد کنید", (value) =>
      isValidIranianPhoneNumber(value)
    ),

  password: Yup.string().required("این فیلد باید پر شود!"),
});
