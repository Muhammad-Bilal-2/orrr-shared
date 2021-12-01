import * as React from "react";
import { useMemo } from "react";
import { AuthenticationState } from "./authenticationState";
import { useGoogleProvider } from "./googleProvider/useGoogleProvider";
import { IAuthUser } from "./types";
// import { usePassportProvider } from "./usePassportProvider";

export interface IAuthProvider {
  getAccountInfo(): IAuthUser | undefined;
  login(): void;
  logout(): void;
  getError(): AuthError | null;
}
export type LoginFunction = (username?: string, password?: string) => void;
type LogoutFunction = () => void;
export interface AuthError {
  message: string;
  details: object;
}
export interface IAuthenticationFunctionProps {
  logout: LogoutFunction;
  authenticationState: AuthenticationState;
  accountInfo: IAuthUser | undefined;
  error: AuthError | null;
  loading: boolean;
  login: () => void;
  tag: boolean;
}

export const Authentication: any = (props: any) => {
  const {
    googleId = "1051642862462-235q758ihuibbn4hv3ic2nudqu7444fq.apps.googleusercontent.com",
    tag,
    loginCallBack,
    logoutCallBack,
  } = props;
  const [loading, _setLoading] = React.useState(false);
  const [accountInfo, _setAccountInfo] = React.useState<IAuthUser | undefined>(
    undefined
  );
  const [error, _setError] = React.useState(null);
  const [authenticationState, _setAuthenticationState] = React.useState(
    AuthenticationState.InProgress
  );

  const onLogin = React.useCallback(
    (
      isSuccessFulLogin: boolean,
      token?: string,
      accountInfo?: IAuthUser,
      error?: any
    ) => {
      if (isSuccessFulLogin && accountInfo) {
        token &&
          sessionStorage.setItem(
            process.env.REACT_APP_SESSION_TOKEN_KEY,
            token
          );

        _setAuthenticationState(AuthenticationState.Authenticated);
        _setAccountInfo(accountInfo);
        _setError(error);
      } else {
        _setAuthenticationState(AuthenticationState.Unauthenticated);
      }
      _setLoading(false);
      loginCallBack();
    },

    []
  );

  const onLogout = React.useCallback(() => {
    sessionStorage.removeItem(process.env.REACT_APP_SESSION_TOKEN_KEY);
    _setAuthenticationState(AuthenticationState.Unauthenticated);
    logoutCallBack();
  }, []);

  const { login, logout } = useGoogleProvider({
    googleClientId: googleId,
    onLoginCallback: onLogin,
    onLogoutCallback: onLogout,
  });
  // const { login: logins, logout: logouts } = usePassportProvider({
  //   onLoginCallback: onLogin,
  //   onLogoutCallback: onLogout,
  // });
  // const login = props.tag ? loging : logins;
  // const logout = props.tag ? logoutg : logouts;

  const childrenFunctionProps = useMemo<IAuthenticationFunctionProps>(
    () => ({
      accountInfo,
      authenticationState,
      error,
      logout,
      loading,
      login,
      tag,
    }),
    [accountInfo, authenticationState, error, logout, loading, login, tag]
  );

  function getChildrenOrFunction(
    children: any,
    childrenProps: IAuthenticationFunctionProps
  ) {
    if (children) {
      if (isChildrenFunction(children)) {
        return (children as (l: IAuthenticationFunctionProps) => {})(
          childrenProps
        );
      } else {
        return children;
      }
    } else {
      return null;
    }
  }

  function isChildrenFunction(children: any) {
    return typeof children == "function" || false;
  }

  if (isChildrenFunction(props.children)) {
    return getChildrenOrFunction(props.children, childrenFunctionProps);
  } else {
    return null;
  }
};
