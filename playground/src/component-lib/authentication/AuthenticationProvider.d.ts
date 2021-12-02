import React from "react";
import { IAuthenticatedAccountInfoRoutesProps, IUnauthorizedRoutesProps } from "./types";
interface IAuthenticationProviderProps {
    googleId?: string;
    login?: () => void;
    logout?: () => void;
    AuthenticatedAccountInfoRoutes: React.FC<IAuthenticatedAccountInfoRoutesProps>;
    UnauthenticatedRoutes: React.FC<IUnauthorizedRoutesProps>;
    AuthenticatedAccountErrorRoutes: React.FC<any>;
}
export declare const AuthenticationProvider: React.FC<IAuthenticationProviderProps>;
export {};
