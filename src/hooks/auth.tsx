import React, {createContext, ReactNode, useContext, useState} from "react";
import * as AuthSession from "expo-auth-session";
import { DiscordEnv } from "../configs";
import { api } from "../servers/api";


type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type ContextData = {
    user: User,
    loading: Boolean,
    signIn: () => Promise<void>;
}

type AuthorizationDiscordResponse = AuthSession.AuthSessionResult & {
    params: {
        access_token: string;
    }
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as ContextData);

function AuthProvider({ children } : AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    async function signIn() {
        try {
            setLoading(true);
            const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${DiscordEnv.CLIENT_ID}&redirect_uri=${DiscordEnv.REDIRECT_URI}&response_type=${DiscordEnv.RESPONSE_TYPE}&scope=${DiscordEnv.SCOPE}`;
            const {type, params} = await AuthSession.startAsync( {authUrl} ) as AuthorizationDiscordResponse;

            if (type === "success") {
                api.defaults.headers.authorization = `Bearer ${ params.access_token }`;
                const userInfo = await api.get('/users/@me');
                console.log(userInfo);
                setLoading(false);
            }
        } catch (e) {
            setLoading(false);
            throw new Error(e);
        }

    }

    return (
        <AuthContext.Provider value={{ user, signIn, loading }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }