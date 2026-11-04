import { createContext, useState } from "react";

type Theme = 'light' | 'dark'

type ThemeContextType = {
    theme: Theme
    setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

type Props = {
    children: React.ReactNode;
}

export const Context = createContext<ThemeContextType | null>(null)

export function ThemeContext({ children }: Props) {

    const [theme, setTheme] = useState<Theme>('light');




    return (
        <Context.Provider value={{ theme, setTheme }}>
            {children}
        </Context.Provider>

    )

}

 