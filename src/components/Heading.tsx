type headingProps = {
    children: string
}

function Heading(props: headingProps) {
    return (
        <div><h2>{props.children}</h2></div>
    )
}

export default Heading