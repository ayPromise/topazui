import { createContext, PropsWithChildren, useState } from "react"

type DropDownContextType = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;

    shownBy: 'click' | 'hover';
    alignSide: 'left' | 'right' | 'bottom' | 'top';
}

type DropDownProviderProps = {
    children: React.ReactNode;
    shownBy: 'click' | 'hover';
    alignSide: 'left' | 'right' | 'bottom' | 'top';
}

export const DropDownContext = createContext<DropDownContextType | null>(null)

export const DropDownProvider: React.FC<DropDownProviderProps> = ({ children, shownBy, alignSide }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const value: DropDownContextType = {
        isOpen,
        setIsOpen,
        shownBy,
        alignSide
    }

    return <DropDownContext.Provider value={value}>
        {children}
    </DropDownContext.Provider>
}
