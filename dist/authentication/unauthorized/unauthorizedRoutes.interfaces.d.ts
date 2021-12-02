/// <reference types="react" />
import { AuthError } from "../Authentication";
import { AuthorizationRoles } from "../AuthorizationRoles";
export interface IUnauthorizedRoute {
    path: string;
    exact: boolean;
    displayText: string;
    component: React.FC<any>;
    layout: React.FC;
    authorizedRoles: AuthorizationRoles[];
    login?: (username?: string, password?: string) => void;
    error?: AuthError | null;
    errorComponent: React.FC<any>;
    errorMessage: string;
    errorBody: string;
    errorButtonText: string;
}
export interface IUnauthorizedRoutes {
    [key: string]: IUnauthorizedRoute;
}
