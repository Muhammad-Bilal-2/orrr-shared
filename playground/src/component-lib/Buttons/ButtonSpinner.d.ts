import * as React from "react";
import { ButtonProps } from "react-bootstrap";
interface IButtonSpinnerProps extends ButtonProps {
    loading: boolean;
    loadingText?: string;
}
export declare const ButtonLoadingSpinner: React.FC<IButtonSpinnerProps>;
export {};
