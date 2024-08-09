import { createContext, PropsWithChildren, useState } from "react";

type TabsContextType = {
    selectedTab: any;
    setSelectedTab: React.Dispatch<React.SetStateAction<any>>
}

export const TabsContext = createContext<TabsContextType | null>(null)

const TabsProvider = ({ children }: PropsWithChildren) => {
    const [selectedTab, setSelectedTab] = useState<any>()
    const value: TabsContextType = {
        selectedTab,
        setSelectedTab
    }
    return <TabsContext.Provider value={value}>
        {children}
    </TabsContext.Provider>
}

export default TabsProvider