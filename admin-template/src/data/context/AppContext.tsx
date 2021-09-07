import { createContext, useState } from "react";
type Tema = 'dark' | ''
interface AppContextProps {
    theme?: string
    changetheme?: () => void
}

const AppContext = createContext<AppContextProps>({})
export function AppProvider(props) {
    const [theme, settheme] = useState<Tema>('dark')

    function changetheme() {
        settheme(theme ==='' ? 'dark': '')
    }

    return (
        <AppContext.Provider value={{
            theme,
            changetheme
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext