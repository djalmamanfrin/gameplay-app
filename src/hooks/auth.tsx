import React, {createContext, ReactNode, useContext, useState} from "react";

type User = {
    id: string;
    username: string;
    firstName: string;
    avatar: string;
    email: string;
    token: string;
}

type ContextData = {
    user: User
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as ContextData);

function AuthProvider({ children } : AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);

    return (
        <AuthContext.Provider value={{ user }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth }