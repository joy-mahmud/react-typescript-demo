
import { useContext } from "react"
import ThemeContext, { ThemeContextProvider } from "../context/ThemeContext"

type containerProps = {
    styles: React.CSSProperties,
    children: React.ReactNode
}

function Container(props: containerProps) {
    const theme = useContext(ThemeContext)
    return (
        <ThemeContextProvider>
            <div style={{ ...props.styles, backgroundColor: theme.primary.main, color: theme.primary.text }}>
                {props.children}
            </div>
        </ThemeContextProvider>

    )
}

export default Container