import { createContext } from "react";
import { theme } from "./theme";

const ThemeContext = createContext(theme)
type themeContextProviderProps = {
    children: React.ReactNode
}
export const ThemeContextProvider = ({ children }: themeContextProviderProps) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext