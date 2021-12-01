import { Authentication, IAuthenticationFunctionProps } from "./Authentication";
import { AuthenticationState } from "./authenticationState";
import { CenteredSpinner } from "../Spinner/index";
import React from "react";
import { IUnauthorizedRoutes } from "./unauthorized/unauthorizedRoutes.interfaces";
import {
  IAuthenticatedAccountInfoRoutesProps,
  IUnauthorizedRoutesProps,
} from "./types";
import { Login } from "./login/Login";

interface IAuthenticationProviderProps {
  googleId?: string;
  login?: () => void;
  logout?: () => void;
  AuthenticatedAccountInfoRoutes: React.FC<IAuthenticatedAccountInfoRoutesProps>;
  UnauthenticatedRoutes: React.FC<IUnauthorizedRoutesProps>;
  AuthenticatedAccountErrorRoutes: React.FC<any>;
}

export const AuthenticationProvider: React.FC<IAuthenticationProviderProps> = (
  props
) => {
  const {
    googleId,
    login,
    logout,
    AuthenticatedAccountInfoRoutes,
    UnauthenticatedRoutes,
    AuthenticatedAccountErrorRoutes,
  } = props;
  return (
    <>
      <Authentication
        googleId={googleId}
        loginCallBack={login}
        logoutCallBack={logout}
      >
        {({
          authenticationState,
          accountInfo,
          loading,
          error,
          login,
          logout,
        }: IAuthenticationFunctionProps) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              if (accountInfo) {
                return (
                  <AuthenticatedAccountInfoRoutes
                    userInformation={accountInfo}
                    logout={logout}
                  />
                );
              }
              return (
                <AuthenticatedAccountErrorRoutes
                  loading={loading}
                  error={error}
                  signIn={login}
                  LoginPage={Login}
                />
              );
            case AuthenticationState.Unauthenticated:
              return (
                <UnauthenticatedRoutes
                  loading={loading}
                  error={error}
                  signIn={login}
                  loaded={loading}
                  LoginPage={Login}
                />
              );
            case AuthenticationState.InProgress:
              return (
                <CenteredSpinner
                  loading={accountInfo === undefined && !error ? true : false}
                  size="lg"
                  loadingText="Authenticating..."
                />
              );
          }
        }}
      </Authentication>
    </>
  );
};
