import { createContext, PropsWithChildren, useState } from "react";

type PopoverContextType = {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const PopoverContext = createContext<PopoverContextType | null>(null)

const PopoverProvider = ({ children }: PropsWithChildren) => {
    const [visible, setVisible] = useState<boolean>(false)
    const value: PopoverContextType = {
        visible,
        setVisible
    }
    return <PopoverContext.Provider value={value}>
        {children}
    </PopoverContext.Provider>
}

export default PopoverProvider