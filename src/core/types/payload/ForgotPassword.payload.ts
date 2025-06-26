export interface IForgotPasswordPayload{
    userName: string;
}

export interface IChangePasswordPayload{
    userName: string;
    oldPassword: string;
    newPassword: string;
}

export interface IResetPasswordPayload{
    userName: string;
    password: string;
    code: string;
}