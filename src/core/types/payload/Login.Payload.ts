export interface ILoginPayload {
  userName: string;
  password: string;
}

export interface ILoginSendCodePayload {
  userName: string;
}

export interface ILoginValidationCodePayload {
  userName: string;
  code: string;
}
