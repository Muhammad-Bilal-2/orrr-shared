import * as React from "react";
interface INativeOverlayProps {
    show: boolean;
    setShow: () => void;
    header: string;
}
export declare const NativeOverlay: React.FC<INativeOverlayProps>;
export {};
