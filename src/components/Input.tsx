type inputProps = {
    value: string
    handleChanges: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: inputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <input type='text' value={props.value} onChange={handleInputChange} />
    )
}

export default Input