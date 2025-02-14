import React from "react"


type GreetProps = {
    name: string,
    children: React.ReactNode
}

function Greet(props: GreetProps) {

    return (
        <div>
            greet {props.name}
            {props.children}
        </div>
    )
}

export default Greet