import React from 'react'
import { tv } from 'tailwind-variants'
import useCarousel from '../context/useCarousel'
import { ChildrenAndStyles } from '@/types';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Button from '@/components/Button';

type SlideNextProps = {
    length?: number;
} & ChildrenAndStyles

const SlideNext: React.FC<SlideNextProps> = ({ length, children, className }) => {
    if (!length)
        length = 1

    const { activeIndex, setActiveIndex } = useCarousel()
    const slideNextStyles = tv({
        base: 'absolute p-2 size-8 rounded bg-black text-white flex justify-center items-center -right-[40px] cursor-pointer select-none top-1/2 -translate-y-1/2',
        variants: {
            last: {
                true: 'opacity-50 pointer-events-none',
                false: ''
            }
        }
    })
    return (
        <Button onClick={() => setActiveIndex(activeIndex + 1)} className={slideNextStyles({ last: activeIndex === length - 1, className })}>
            {children ? children : <ChevronRightIcon width={20} />}
        </Button>
    )
}

SlideNext.displayName = 'slideNext'


export default SlideNext