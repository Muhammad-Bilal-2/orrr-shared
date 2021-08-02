export declare function notEmpty<TValue>(value: TValue | null | undefined): value is TValue;
export declare function isNotNull<T>(value: (T | null | undefined)[] | null | undefined): T[];
export declare function GetToday(): string;
export declare const groupBy: (data: {
    [key: string]: any;
}[], key: string) => {
    [key: string]: any;
};
export declare function extract<T>(properties: Record<keyof T, true>): <TActual extends T>(value: TActual) => T;
export declare function OrderBy<T extends {
    [key: string]: any;
}>(array: T[], property: string): T[];
export declare function checkValuesData<T>(array: T[]): T[];
declare type valueOf<T> = T[keyof T];
export declare function nameOf<T, V extends T[keyof T]>(f: (x: T) => V): valueOf<{
    [K in keyof T]: T[K] extends V ? K : never;
}>;
export declare function getUniqueBy<T extends {
    [key: string]: any;
}>(arr: T[], prop: string): T[];
export {};
