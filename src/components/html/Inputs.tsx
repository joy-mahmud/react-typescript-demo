type inputProps = React.ComponentProps<'input'>

function Inputs(props: inputProps) {
    return (
        <input {...props} />
    )
}

export default Inputs