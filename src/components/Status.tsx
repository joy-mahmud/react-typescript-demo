
type statusProps = {
    status: 'loading' | 'success' | 'error'
}

function Status(props: statusProps) {
    return (
        <div>Status {props.status}</div>
    )
}

export default Status