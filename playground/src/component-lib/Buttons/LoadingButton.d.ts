import * as React from 'react';
import { ButtonProps } from 'react-bootstrap';
export interface ILoadingButtonProps extends ButtonProps {
    isLoading: boolean | undefined;
    defaultText: string;
    loadingText: string;
    onClick?: () => void;
    type?: string;
}
export declare const LoadingButton: React.FC<ILoadingButtonProps>;
