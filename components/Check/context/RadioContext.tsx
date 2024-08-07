import { createContext } from "react";

type RadioContextType = {
    name: string
}

export const RadioContext = createContext<RadioContextType | null>(null)

type RadioProviderProps = {
    children: React.ReactNode
    name: string;
}

const RadioProvider: React.FC<RadioProviderProps> = ({ children, name }) => {
    const value: RadioContextType = {
        name
    }
    return <RadioContext.Provider value={value}>
        {children}
    </RadioContext.Provider>
}

export default RadioProvider