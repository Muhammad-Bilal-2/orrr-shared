import { IAuthUser } from "../types";
export interface IAuthGoogleProps {
    googleClientId: string;
    onLoginCallback: (isSuccessFulLogin: boolean, token?: string, accountInfo?: IAuthUser, error?: any) => void;
    onLogoutCallback: () => void;
}
export declare const useGoogleProvider: ({ googleClientId, onLoginCallback, onLogoutCallback, }: IAuthGoogleProps) => {
    login: () => void;
    logout: () => void;
};
