import { useContext } from "react"
import {SelectContext} from "./SelectContext"

const useSelect = ()=>{
    const selectContext = useContext(SelectContext)
    if (!selectContext) throw new Error("useSelect must be used within an SelectProvider")

    return selectContext
}

export default useSelect