import React from 'react'
import useCarousel from '../context/useCarousel'
import { tv } from 'tailwind-variants'

type ItemProps = {
    index?: number;
    children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ index, children }) => {
    const { activeIndex } = useCarousel()
    const itemStyles = tv({
        base: 'relative h-full w-full absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-0',
        variants: {
            active: {
                true: '',
                false: 'hidden'
            }
        }
    })
    return (
        <div className={itemStyles({ active: activeIndex === index })} >
            {children}
        </div>
    )
}

Item.displayName = 'item'

export default Item