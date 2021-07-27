import * as React from "react";
interface IBaseSpinner {
    loading: boolean;
    loadingText?: string;
}
interface ICenteredSpinner extends IBaseSpinner {
    size: "lg" | "md" | "sm" | "xs" | "btn";
    justifyLeft?: boolean;
}
export declare const CenteredSpinner: React.FC<ICenteredSpinner>;
export declare const ButtonSpinner: React.FC<IBaseSpinner>;
export {};
