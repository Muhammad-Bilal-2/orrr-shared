import * as React from 'react';
export interface ILoginModalOverlayProps {
    show: boolean;
    setShow: () => void;
    size?: 'sm' | 'lg';
}
export declare const LoginModalOverlay: React.FC<ILoginModalOverlayProps>;
