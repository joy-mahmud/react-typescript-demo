
type HorizontalPositions = 'left' | 'center' | 'right'
type VerticalPositions = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: | Exclude<`${HorizontalPositions}-${VerticalPositions}`, 'center-center'> | 'center'
}


function Toast({ position }: ToastProps) {
    return (
        <div>Toast-{position}</div>
    )
}

export default Toast