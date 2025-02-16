export type profileProps = {
    name: string
}

function Profile({ name }: profileProps) {
    return (
        <div>Profile: name: {name}</div>
    )
}

export default Profile