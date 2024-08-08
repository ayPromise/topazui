import { useContext } from "react"
import { PopoverContext } from "./PopoverProvider"

const usePopover = ()=>{
    const popoverContext = useContext(PopoverContext)
    if(!popoverContext) throw new Error('usePopover must be used within a PopoverProvider')
    return popoverContext
}

export default usePopover