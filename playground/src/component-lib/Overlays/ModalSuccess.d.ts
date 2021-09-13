import React from "react";
import { IModalNoHeaderOverlayProps } from "./ModalNoHeaderOverlay";
interface IModalSuccessProps extends IModalNoHeaderOverlayProps {
    text: string;
}
export declare const ModalSuccess: React.FC<IModalSuccessProps>;
export {};
