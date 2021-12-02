import { AuthenticationState } from "./authenticationState";
import { IAuthUser } from "./types";
export interface IAuthProvider {
    getAccountInfo(): IAuthUser | undefined;
    login(): void;
    logout(): void;
    getError(): AuthError | null;
}
export declare type LoginFunction = (username?: string, password?: string) => void;
declare type LogoutFunction = () => void;
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
export declare const Authentication: any;
export {};
