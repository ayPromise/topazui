import React from 'react'
import useCarousel from '../context/useCarousel'
import { tv } from 'tailwind-variants'
import { ChildrenAndStyles } from '@/types'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import Button from '@/components/Button'


const SlideBack: React.FC<ChildrenAndStyles> = ({ children, className }) => {
    const { activeIndex, setActiveIndex } = useCarousel()

    const slideBackStyles = tv({
        base: 'absolute p-2 size-8 rounded bg-black text-white flex justify-center items-center -left-[40px] cursor-pointer select-none top-1/2 -translate-y-1/2',
        variants: {
            first: {
                true: 'opacity-50 pointer-events-none',
                false: ''
            }
        }
    })
    return (
        <Button onClick={() => setActiveIndex(activeIndex - 1)} className={slideBackStyles({ first: activeIndex === 0, className })}>
            {children ? children : <ChevronLeftIcon width={20} />}
        </Button>
    )
}

SlideBack.displayName = 'slideBack'

export default SlideBack