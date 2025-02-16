import { useState } from "react"
import { AuthUserType, UserContext, UserContextProviderProps } from "./UserContext"

function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState<AuthUserType | null>(null)
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider >
    )
}

export default UserContextProvider