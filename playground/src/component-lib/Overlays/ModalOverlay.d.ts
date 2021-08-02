import * as React from "react";
interface IModalOverlayProps {
    show: boolean;
    setShow: () => void;
    header: string;
}
export declare const ModalOverlay: React.FC<IModalOverlayProps>;
export {};
