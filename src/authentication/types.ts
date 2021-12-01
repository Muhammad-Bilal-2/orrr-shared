import { GoogleLoginResponse } from "react-google-login";
import { AuthError } from "..";
import { ILogin } from "./login/Login";
// import {
//   IClientPermissions,
//   IPermissions,
// } from "..//contextss/AccountContextt";
// import { IClientSite } from "../types/permissions.interfaces";
// import { GetUserSettings_TechPortal_GetUser_UserApplication_items } from "../../generated/GetUserSettings";
// import { IClientSite } from '../../types/permissions.interfaces';
// import { AuthorizationRoles } from "./AuthorizationRoles";

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
// export interface IUserInfoo {
//   name: string;
//   userName: string;
//   userId: number;
//   email: string;
//   permissions: IPermissions;
//   clientPermissions?: IClientPermissions;
//   GetClientIds: () => string[];
//   GetClientMasterIds: () => string[];
//   GetClientSiteIds: () => string[];
//   GetClientSitesByClientId: (clientId: string) => IClientSite[];
//   DisplayPortfolio: () => boolean;
//   AuthorizeRoute: (routeRoles: AuthorizationRoles[]) => boolean;
//   Logout: () => void;
// }

export interface IUnauthorizedRoutesProps {
  error: AuthError | null;
  loading?: boolean | undefined;
  signIn: () => void;
  loaded: boolean;
  LoginPage: React.FC<ILogin>;
}
