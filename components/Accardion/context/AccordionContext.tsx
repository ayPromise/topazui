import { createContext, useState } from "react"
import { ItemContextType } from "./ItemContext";

type AccordionContextType = {
    items: ItemContextType[];
    setItems: React.Dispatch<React.SetStateAction<ItemContextType[]>>
    multipleSelection: boolean;
}

export const AccordionContext = createContext<AccordionContextType | null>(null)

const AccordionProvider = ({ children, multipleSelection }: {
    children: React.ReactNode;
    multipleSelection: boolean;
}) => {
    const [items, setItems] = useState<ItemContextType[]>([])
    const value: AccordionContextType = {
        items,
        setItems,
        multipleSelection
    }
    return <AccordionContext.Provider value={value}>
        {children}
    </AccordionContext.Provider>
}

export default AccordionProvider