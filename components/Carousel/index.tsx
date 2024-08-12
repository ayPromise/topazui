import React from 'react'
import Item from './components/Item';
import CarouselProvider from './context/CarouselContext';
import extractStaticChildren from '@/utils/extractStaticChildren';
import Image from './components/Image';
import Caption from './components/Caption';
import SlideBack from './components/SlideBack';
import SlideNext from './components/SlideNext';

type CarouselProps = {
    transition?: string;
    activeIndex?: number;
    onSelect?: (newActiveIndex: number) => void;
    children: React.ReactNode;
}


const CarouselComponent: React.FC<CarouselProps> = ({ children }) => {
    const { item: itemsElements, slideBack: slideBackElement, slideNext: slideNextElement } = extractStaticChildren(children, [
        {
            component: Item,
            multiple: true
        }, { component: SlideBack }, { component: SlideNext }])
    return (
        <div className='relative w-full'>
            <div className="relative h-56 w-64 rounded-lg">
                {slideBackElement || <SlideBack />}
                {/*@ts-ignore */}
                {itemsElements && itemsElements.map((item, index) => React.cloneElement(item as React.ReactElement, { index: index }))}
                {(slideNextElement && React.cloneElement(slideNextElement as React.ReactElement, { length: Array.isArray(itemsElements) ? itemsElements.length : 1 })) || <SlideNext length={Array.isArray(itemsElements) ? itemsElements.length : 1} />}
            </div>
        </div>
    )
}

const Carousel: React.FC<CarouselProps> = (props) => {
    return <CarouselProvider>
        <CarouselComponent {...props} />
    </CarouselProvider>
}

export default Object.assign(Carousel, {
    Item: Item,
    Image: Image,
    Caption: Caption,
    SlideBack: SlideBack,
    SlideNext: SlideNext
})