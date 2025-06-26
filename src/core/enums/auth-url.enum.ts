export enum authUrlEnum {
  //login
  login = "/auth/login",

  //logout
  logout = "/auth/logout",

  //forgot pass
  forgotPassword = "/auth/forgot-password",
  resetPassword = "/auth/reset-password",

  //register
  register = "/auth/register",
  verifyCode = "/auth/verify-code",
  finalizeRegister = "/auth/finalize-register",
  welcoming = "/auth/welcoming",

  //sso
  confirmInfo = "/auth/confirm-info",
  signInOidc = "/auth/signin-oidc",
}
