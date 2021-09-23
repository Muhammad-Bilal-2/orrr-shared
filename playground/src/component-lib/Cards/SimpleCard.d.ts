import * as React from "react";
interface ISimpleCardProps {
    loading: boolean;
    header?: string;
    buttons?: React.ReactNode;
    isMobileView?: boolean;
    style?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    cardClass?: string;
    headerClass?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    bodyClass?: string;
}
export declare const SimpleCard: React.FC<ISimpleCardProps>;
export {};
