import { useState } from "react"
type userType = {
    name: string,
    email: string
}

function User() {
    const [user, setUser] = useState<userType | null>(null)
    //const [user, setUser] = useState<userType>({} as userType)
    const handleLogin = () => {
        setUser(
            {
                name: 'joy',
                email: 'joy@gmail.com'
            }
        )
    }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <p>Username:{user?.name}</p>
            {/* <p>Username:{user.name}</p> when used type assertion */}

            <p>Username:{user?.email}</p>

        </div>
    )
}

export default User