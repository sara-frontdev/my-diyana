"use client";

//base
import {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

//lib
import { jwtDecode } from "jwt-decode";

//core
import {
  getAccessToken,
  getRefreshToken,
} from "@/core/services/authentication/authentication.service";
import { IdecodeToken } from "../models/decode-token.model";
import { IUserInfoType } from "../models/user-info.model";

//types
interface IAuthenticationContext {
  children: ReactNode;
}

export interface IAuthInfo {
  token: string;
  refreshToken: string;
  userInfo: IUserInfoType;
  roleState: string[];
  setUserInfoState: React.Dispatch<React.SetStateAction<IUserInfoType>>;
  setTokenState: React.Dispatch<React.SetStateAction<string>>;
  setRefreshTokenState: React.Dispatch<React.SetStateAction<string>>;
  setRoleState: React.Dispatch<SetStateAction<string[]>>;
  resetAuthContext: () => void;
}

//createContext
export const authContext = createContext<IAuthInfo | null>(null);

//initialUserInfoState
const initialUserInfoState: IUserInfoType = {
  name: "",
  Username: "",
  lastName: "",
  phone_number: 0,
  UserLocalId: 0,
};

//Provider
const AuthenticationContext: FC<IAuthenticationContext> = ({ children }) => {
  const token = getAccessToken() ? String(getAccessToken()) : "";

  const refreshToken = getRefreshToken() ? String(getRefreshToken()) : "";

  //states
  const [userInfoState, setUserInfoState] = useState<IUserInfoType>({
    name: "",
    Username: "",
    lastName: "",
    phone_number: 0,
    UserLocalId: 0,
  });

  const [tokenState, setTokenState] = useState<string>(token);
  const [refreshTokenState, setRefreshTokenState] =
    useState<string>(refreshToken);

  const [roleState, setRoleState] = useState<string[]>([]);

  //getData
  const getData = async () => {
    try {
      if (tokenState) {
        const decode_token: IdecodeToken = jwtDecode(tokenState);

        //update context userInfo
        setUserInfoState({
          name: decode_token.name,
          Username: decode_token.preferred_username,
          lastName: decode_token.family_name,
          phone_number: decode_token.phone_number,
          UserLocalId: decode_token.UserLocalId,
        });

        //Role
        const role =
          typeof decode_token.Role === "string"
            ? [decode_token.Role]
            : decode_token.Role;

        setRoleState(role);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const resetAuthContext = () => {
    setUserInfoState(initialUserInfoState);
    setTokenState("");
    setRefreshTokenState("");
    setRoleState([]);
  };

  return (
    <authContext.Provider
      value={{
        token: tokenState,
        setTokenState,
        refreshToken: refreshTokenState,
        setRefreshTokenState,
        userInfo: userInfoState,
        setUserInfoState,
        roleState: roleState,
        setRoleState,
        resetAuthContext,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

//useContext
const useUserAuth = () => {
  const pc = useContext(authContext);
  if (pc === null) {
    throw new Error("usePermissions Must be inside of Provider");
  }
  return pc;
};

export { AuthenticationContext, useUserAuth };
