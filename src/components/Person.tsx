import { personProps } from "./person.type"



function Person({ name, isLoggedIn }: personProps) {
    return (
        <div>
            Person: {name.fname} {name.lname} <br />
            Login:{isLoggedIn ? <>Loggedin</> : <>not logged in</>}
        </div>
    )
}

export default Person