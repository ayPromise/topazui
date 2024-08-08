import { createContext, PropsWithChildren, useState } from "react"

export type ItemContextType = {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ItemContext = createContext<ItemContextType | null>(null)

const ItemProvider = ({ children, defaultOpen }: { children: React.ReactNode; defaultOpen: boolean; }) => {
    const [visible, setVisible] = useState<boolean>(defaultOpen)
    const value: ItemContextType = {
        visible,
        setVisible
    }
    return <ItemContext.Provider value={value}>
        {children}
    </ItemContext.Provider>
}

export default ItemProvider