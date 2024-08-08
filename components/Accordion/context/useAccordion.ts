import { useContext } from "react"
import { AccordionContext } from "./AccordionContext"

const useAccordion = ()=>{
    const accordionContext = useContext(AccordionContext)
    if(!accordionContext) throw new Error('useAccordion must be used within an AccordionProvider')
    return accordionContext 
}

export default useAccordion