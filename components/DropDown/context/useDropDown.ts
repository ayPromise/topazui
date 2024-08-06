import { useContext } from "react";
import { DropDownContext } from "./DropDownContext";

const useDropDown = ()=>{
    const dropDownContext = useContext(DropDownContext)
    if(!dropDownContext) throw new Error("useDropDown must be used within an DropDownProvider")
    
    return dropDownContext 
}

export default useDropDown