import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./themeContext";
import {useContext} from "react";

export function useTheme(): UseThemeResult{
    const {theme, setTheme}: ThemeContextProps = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        document.body.className = newTheme
    }

    return {theme, toggleTheme}
}

export interface UseThemeResult {
    toggleTheme: () => void,
    theme: Theme
}