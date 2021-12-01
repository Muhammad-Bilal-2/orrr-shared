import * as React from "react";
interface IModalLoginProps {
    modal: string;
    text: string;
    endpoint: string;
    onClick?: () => void;
}
export declare const ModalLogin: React.FC<IModalLoginProps>;
export {};
