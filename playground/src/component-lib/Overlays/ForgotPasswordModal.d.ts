import * as React from "react";
export interface IModalLoginProps {
    loading: boolean;
    closeModal: React.Dispatch<React.SetStateAction<string>>;
    status: string;
    handleReminder: (modal: "username" | "password", value: string) => Promise<void>;
    showError: () => void;
}
export declare const ForgotPasswordModal: React.FC<IModalLoginProps>;
