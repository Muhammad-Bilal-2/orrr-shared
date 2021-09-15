import * as React from "react";
export interface AuthError {
    message: string;
    details: object;
}
export interface ILogin {
    login?: (username: string, password: string) => void;
    loading?: boolean | undefined;
    error?: AuthError | null;
}
export declare const Login: React.FC<ILogin>;
