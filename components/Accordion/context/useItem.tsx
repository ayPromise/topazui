import { useContext } from "react"
import { ItemContext } from "./ItemContext"

const useItem = () => {
    const itemContext = useContext(ItemContext)
    if (!itemContext) throw new Error('useAccordion must be used within an AccordionProvider')
    return itemContext
}

export default useItem