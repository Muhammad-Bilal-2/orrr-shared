import * as React from "react";
export interface IModalNoHeaderOverlayProps {
    show: boolean;
    setShow: () => void;
    size?: "sm" | "lg";
}
export declare const ModalNoHeaderOverlay: React.FC<IModalNoHeaderOverlayProps>;
