/// <reference types="react" />
import { GoogleLoginResponse } from "react-google-login";
import { AuthError } from "..";
import { ILogin } from "./login/Login";
export interface IAuthUser {
    googleInfo?: GoogleLoginResponse;
    netReportId?: string;
    techPortalId?: string;
}
export interface IUserInfo {
    userName?: string;
    id?: string;
    email?: string;
    DarkMode?: boolean;
    givenName?: string;
    familyName?: string;
    Logout?: () => void;
    UserApplication?: (any | null)[] | null | undefined;
    imageUrl?: string;
}
export interface IAuthenticatedAccountInfoRoutesProps {
    userInformation: IAuthUser;
    logout: () => void;
}
export interface IUnauthorizedRoutesProps {
    error: AuthError | null;
    loading?: boolean | undefined;
    signIn: () => void;
    loaded: boolean;
    LoginPage: React.FC<ILogin>;
}
