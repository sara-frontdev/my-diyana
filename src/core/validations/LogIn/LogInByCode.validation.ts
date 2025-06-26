import * as Yup from "yup";
import { isValidIranianPhoneNumber } from "@/core/utils/check-identity.utils";

export const LogInByCodeValidation = Yup.object().shape({
  userName: Yup.string()
    .required("این فیلد باید پر شود!")
    .test("userName", "لطفا شماره همراه معتبر وارد کنید", (value) =>
      isValidIranianPhoneNumber(value)
    ),

  code: Yup.string().required("این فیلد باید پر شود!"),
});
