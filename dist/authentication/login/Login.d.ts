import * as React from "react";
import { AuthError, LoginFunction } from "../Authentication";
export interface ILogin {
    error: AuthError | null;
    loading?: boolean;
    signIn: LoginFunction;
    isAutoLogin?: boolean;
    logo?: string;
}
export declare const Login: React.FC<ILogin>;
