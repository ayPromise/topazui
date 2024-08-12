import { useContext } from "react"
import { CarouselContext } from "./CarouselContext"

const useCarousel = ()=>{
    const carouselContext = useContext(CarouselContext)
    if (!carouselContext) throw new Error("useCarousel must be used within a CarouselProvider. Use Carousel component")
    return carouselContext
}

export default useCarousel