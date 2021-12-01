import { useCallback } from "react";
import { GoogleLoginResponse, useGoogleLogin } from "react-google-login";

import { IAuthUser } from "../types";
export interface IAuthGoogleProps {
  googleClientId: string;
  onLoginCallback: (
    isSuccessFulLogin: boolean,
    token?: string,
    accountInfo?: IAuthUser,
    error?: any
  ) => void;
  onLogoutCallback: () => void;
}

export const useGoogleProvider = ({
  googleClientId,
  onLoginCallback,
  onLogoutCallback,
}: IAuthGoogleProps) => {
  const googleSuccessHandler = useCallback(
    (response) => {
      onLoginCallback(
        true,
        response.getAuthResponse().id_token,
        getAccountInfo(response)
      );
    },
    [onLoginCallback]
  );

  const onAutoLoginFinished = (successLogin: boolean) => {
    if (!successLogin) {
      onLoginCallback(false);
    }
    return successLogin;
  };

  const { signIn } = useGoogleLogin({
    onSuccess: googleSuccessHandler,
    onAutoLoadFinished: onAutoLoginFinished,
    clientId: googleClientId,
    onFailure: (error) => onLoginCallback(true, undefined, undefined, error),
    cookiePolicy: "single_host_origin",
    isSignedIn: true,
    prompt: "consent",
  });

  const logout = useCallback(() => {
    onLogoutCallback();
  }, [onLogoutCallback]);

  const getAccountInfo = (
    response: GoogleLoginResponse
  ): IAuthUser | undefined => {
    let authUser: IAuthUser | undefined = undefined;
    if (response && response.profileObj) {
      authUser = {
        googleInfo: response,
        // userId: response.googleId,
        // email: response.profileObj.email,
        // familyName: response.profileObj.familyName,
        // givenName: response.profileObj.givenName,
        // imageUrl: response.profileObj.imageUrl,
        // name: response.profileObj.name,
      };
    }
    return authUser;
  };

  return {
    login: signIn,
    logout: logout,
  };
};
