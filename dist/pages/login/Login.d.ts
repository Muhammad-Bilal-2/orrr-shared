import * as React from "react";
export interface ILogin {
    login?: (username: string, password: string) => void;
    loading?: boolean | undefined;
}
export declare const Login: React.FC<ILogin>;
