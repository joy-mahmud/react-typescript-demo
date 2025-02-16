import React, { createContext } from 'react'
export type AuthUserType = {
    name: string,
    email: string
}
export type UserContextType = {
    user: AuthUserType | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>
}
export const UserContext = createContext<UserContextType>({} as UserContextType) //this approach is called type assertion

export type UserContextProviderProps = {
    children: React.ReactNode
}