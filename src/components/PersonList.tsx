import { Name } from "./person.type"

type personListProps = {
    names: Name[]
}

function PersonList({ names }: personListProps) {
    return (
        <div>PersonList:
            {
                names.map((name, index) => <div key={index}>{index}.{name.fname} {name.lname}</div>)
            }
        </div>
    )
}

export default PersonList