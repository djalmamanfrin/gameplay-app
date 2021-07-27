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
        access_token?: string;
        error?: string;
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
            console.log(type, params)

            if (type === "success" && !params.error) {
                api.defaults.headers.authorization = `Bearer ${ params.access_token }`;
                const userInfo = await api.get('/users/@me');
                const firstName = userInfo.data.username.split(' ')[0];
                userInfo.data.avatar = `${ DiscordEnv.CDN_IMGAE }/avatars/${ userInfo.data.id }/${ userInfo.data.avatar }.png`;
                setUser({
                    ...userInfo.data,
                    firstName,
                    token: params.access_token
                });
            }
        } catch (e) {
            throw new Error(e);
        } finally {
            setLoading(false);
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