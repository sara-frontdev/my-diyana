import * as Yup from "yup";

export const ResetPassValidation = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$/,
      "رمز عبور باید فقط حروف انگلیسی، بیشتر از 8 کاراکتر و ترکیبی از حروف بزرگ و کوچک ، عدد و کاراکتر خاص باشد "
    )
    .required("این فیلد باید پر شود!")
    .typeError("لطفا فیلد را درست پر کنید !"),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "رمز عبور وارد شده یکسان نیست !")
    .required("این فیلد باید پر شود!")
    .typeError("لطفا فیلد را درست پر کنید !"),
});
