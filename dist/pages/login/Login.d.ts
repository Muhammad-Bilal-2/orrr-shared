import * as React from "react";
interface AuthError {
    message: string;
    details: object;
}
export interface ILoginData {
    username: string;
    password: string;
}
export interface ILogin {
    handleSubmit: (values: ILoginData) => void | Promise<void>;
    loading?: boolean;
    error: AuthError | null;
    setShowModal?: React.Dispatch<React.SetStateAction<string>>;
}
export declare const Login: React.FC<ILogin>;
export {};
