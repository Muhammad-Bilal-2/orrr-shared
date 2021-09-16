import * as React from "react";
export interface IModalNoHeaderOverlayProps {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<string>>;
    size?: "sm" | "lg";
}
export declare const ModalNoHeaderOverlay: React.FC<IModalNoHeaderOverlayProps>;
