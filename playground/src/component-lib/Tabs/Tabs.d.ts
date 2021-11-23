import * as React from "react";
import { ITabsState } from "./TabsState";
interface ITabsProps {
    tabs: ITabsState[];
    uniqueKey: string;
    mountOnEnter?: boolean;
    unmountOnExit?: boolean;
}
export declare const Tabs: React.FC<ITabsProps>;
export {};
