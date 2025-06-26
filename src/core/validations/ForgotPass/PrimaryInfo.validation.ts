import * as Yup from "yup";
import { isValidIranianPhoneNumber } from "@/core/utils/check-identity.utils";

export const PrimaryInfoValidation = Yup.object().shape({
  userName: Yup.string()
    .required("لطفا فیلد را درست پر کنید")
    .typeError("لطفا فیلد را درست پر کنید")
    .test("nationalCode", "لطفا شماره همراه معتبر وارد کنید", (value) =>
      isValidIranianPhoneNumber(value)
    ),
});
