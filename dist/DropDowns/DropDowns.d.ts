import React from "react";
export interface DropDown {
    key: string;
    value: string;
}
export interface Dropdownsprops {
    items?: DropDown[] | undefined;
    selectedItem: string;
    setSelectedItem: (value: string) => void;
    isDisabled?: boolean;
    text?: string;
    dropDownDisplayItemText?: string;
}
export declare const Dropdowns: React.FC<Dropdownsprops>;
