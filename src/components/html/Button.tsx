type ButtonProps = {
    variant: 'primary' | 'secondary',
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

function CustomButton({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className={`button-${variant}`} {...rest}>{children}</button>
    )
}

export default CustomButton