import { useContext } from "react"
import { TabsContext } from "./TabsProvider"

const useTabs = ()=>{
    const tabsContext = useContext(TabsContext)
    if(!tabsContext) throw new Error('useTabs must be used within a TabsProvider (use TABS component)')
    return tabsContext
}

export default useTabs