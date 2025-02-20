import Greet from "../Greet"


const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>{props.name}</div>
    )
}

export default CustomComponents