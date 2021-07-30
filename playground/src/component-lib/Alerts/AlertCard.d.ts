import * as React from "react";
import { Color, Variant } from "react-bootstrap/esm/types";
export interface IAlertCardProps {
    header: string;
    title?: string;
    text: string;
    bgStyle: Variant;
    textColor: Color;
}
export declare const AlertCard: React.FC<IAlertCardProps>;
