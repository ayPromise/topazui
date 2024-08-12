import { createContext, PropsWithChildren, useState } from "react";

type CarouselContextType = {
    activeIndex: number;
    setActiveIndex: (newActiveIndex: number) => void
}


export const CarouselContext = createContext<CarouselContextType | null>(null)

const CarouselProvider = ({ children }: PropsWithChildren) => {
    const [activeIndex, setActiveIndex] = useState<number>(0)
    const value: CarouselContextType = {
        activeIndex,
        setActiveIndex
    }
    return <CarouselContext.Provider value={value}>
        {children}
    </CarouselContext.Provider>
}

export default CarouselProvider