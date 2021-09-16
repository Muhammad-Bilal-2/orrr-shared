import * as React from "react";
import { ILogin } from "./Login";
interface ILoginForm extends ILogin {
    setShowModal: React.Dispatch<React.SetStateAction<string>>;
}
export declare const LoginForm: React.FC<ILoginForm>;
export {};
