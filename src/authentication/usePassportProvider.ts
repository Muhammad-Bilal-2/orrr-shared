// import {
//   ApiPostRequest,
//   ApiPostRequestWithToken,
// } from "../services/fetchService";
// import * as Sentry from "@sentry/react";
// import { useCallback } from "react";
// import { useOnce } from "../utilities/UseOnce";
// import { IAuthUser } from "./types";

// interface IPassportResponse {
//   status: string;
// }
// interface IPassportError {
//   message: string;
// }
// interface IPassportErrorResponse extends IPassportResponse {
//   error: IPassportError;
// }
// interface IPassportData {
//   user: IPassportUser;
// }
// interface IPassportUser {
//   userId: string;
// }
// interface IPassportSuccessResponse extends IPassportResponse {
//   data: IPassportData;
//   token: string;
// }
// export interface ILoginArgs {
//   username: string;
//   password: string;
// }
// export interface IAuthGoogleProps {
//   googleClientId: string;
//   onLoginCallback: (
//     isSuccessFulLogin?: boolean,
//     token?: string,
//     accountInfo?: IAuthUser,
//     error?: any
//   ) => void;
//   onLogoutCallback: () => void;
// }
// export const usePassportProvider = ({
//   onLoginCallback,
//   onLogoutCallback,
// }: any) => {
//   const login = async (username?: string, password?: string): Promise<void> => {
//     let url = process.env.REACT_APP_LOGIN_URL || "";
//     let loginArgs: ILoginArgs = {
//       username: username ? username : "",
//       password: password ? password : "",
//     };
//     let body = JSON.stringify(loginArgs);
//     return await new ApiPostRequest(url, body)
//       .Invoke()
//       .then((result) =>
//         result.json().then(async (response: IPassportResponse) => {
//           let authUser: IAuthUser | undefined = undefined;
//           if (response.status === "success") {
//             let successResponse = response as IPassportSuccessResponse;
//             sessionStorage.setItem(
//               process.env.REACT_APP_SESSION_TOKEN_KEY,
//               successResponse.token
//             );

//             authUser = {
//               netReportId: successResponse.data.user.userId,
//             };

//             onLoginCallback(true, successResponse.token, authUser);
//           } else {
//             const { error } = response as IPassportErrorResponse;
//             if (result.status !== 401 && result.status !== 403) {
//               throw new Error(error.message);
//             }
//             Sentry.captureException(error.message);
//             onLoginCallback(true, undefined, undefined, error);
//           }
//         })
//       )
//       .catch((error) => {
//         Sentry.captureException(error);
//         onLoginCallback(true, undefined, undefined, error);
//       });
//   };
//   const validateExistingToken = async (): Promise<void> => {
//     let token = sessionStorage.getItem(process.env.REACT_APP_SESSION_TOKEN_KEY);
//     console.log("token", token);

//     if (token) {
//       let url = process.env.REACT_APP_VALIDATE_TOKEN_URL || "";
//       console.log("url", url);
//       let body = "";
//       return await new ApiPostRequestWithToken(url, body)
//         .Invoke()
//         .then((result) => result.json())
//         .then(async (response: IPassportResponse) => {
//           console.log("response", response);
//           let authUser: IAuthUser | undefined = undefined;
//           if (response.status === "success") {
//             let successResponse = response as IPassportSuccessResponse;
//             sessionStorage.setItem(
//               process.env.REACT_APP_SESSION_TOKEN_KEY,
//               successResponse.token
//             );
//             authUser = {
//               netReportId: successResponse.data.user.userId,
//             };
//             onLoginCallback(true, successResponse.token, authUser);
//           } else {
//             onLoginCallback(true, undefined, undefined, null);
//           }
//         })
//         .catch((error) => {
//           Sentry.captureException(error);
//           onLoginCallback(true, undefined, undefined, error);
//         });
//     } else {
//       onLoginCallback(true, undefined, undefined, null);
//     }
//   };
//   useOnce(() => {
//     validateExistingToken();
//   });
//   const logout = useCallback((): void => {
//     onLogoutCallback();
//   }, [onLogoutCallback]);
//   return {
//     login: login,
//     logout: logout,
//   };
// };
export {};
