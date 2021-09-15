import React from "react";
interface IPasswordInputProps {
    label?: string;
    isInvalid?: boolean;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<any>) => void;
    error?: string;
    disabled?: boolean;
    placeholder?: string;
}
export declare const PasswordInput: React.FC<IPasswordInputProps>;
export {};
