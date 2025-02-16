// import { useState } from "react"
// type userType = {
//     name: string,
//     email: string
// }

import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function User() {
    // const [user, setUser] = useState<userType | null>(null)
    //const [user, setUser] = useState<userType>({} as userType)
    const userContext = useContext(UserContext)
    const handleLogin = () => {
        // setUser(
        //     {
        //         name: 'joy',
        //         email: 'joy@gmail.com'
        //     }
        // )

        console.log(userContext)
        userContext?.setUser({
            name: 'joy',
            email: 'joy@gmail.com'
        })

    }
    const handleLogout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            {/* <p>Username:{user?.name}</p> */}
            {/* <p>Username:{user.name}</p> when used type assertion */}

            {/* <p>Username:{user?.email}</p> */}
            <p>Username:{userContext?.user?.name}</p>
            <p>Username:{userContext?.user?.email}</p>

        </div>
    )
}

export default User