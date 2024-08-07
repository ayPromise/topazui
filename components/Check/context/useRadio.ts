import { useContext } from "react"
import { RadioContext } from "./RadioContext"

const useRadio = ()=>{
    const radioContext = useContext(RadioContext)
    if(!radioContext) throw new Error("useRadio must be used within RadioProvider")

    return radioContext
}

export default useRadio