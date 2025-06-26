export interface IRegisterPayload {
  userName: string;
  phoneNumber: string;
}

export interface IVerifyCodePayload {
  userName: string;
  code: string;
}

export interface IFinalizeRegisterPayload {
  userName: string;
  password: string;
  code: string;
  name: string;
  lastName: string;
}
