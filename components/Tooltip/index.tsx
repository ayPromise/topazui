import useOutsideEvent from '@/hooks/useOutsideEvent';
import React, { ComponentProps, ElementType, useRef, useState } from 'react'
import { tv } from 'tailwind-variants';

type TooltipCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    placement:
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-start'
    | 'bottom'
    | 'bottom-end'
    | 'left-start'
    | 'left'
    | 'left-end';
    showBy: 'hover' | 'click'
    as?: E
}

type TooltipProps<E extends ElementType> = TooltipCustomProps<E> & Omit<ComponentProps<E>, keyof TooltipCustomProps>

const defaultElementType = 'div'

const Tooltip = <E extends ElementType = typeof defaultElementType>({ message, children, className, placement, showBy, as: Component = defaultElementType as E, ...props }: TooltipProps<E>) => {

    const [visible, setVisible] = useState<boolean>(false);
    const targetRef = useRef<HTMLDivElement>(null)

    useOutsideEvent(targetRef, () => { setVisible(false) })

    const tooltipStyles = tv({
        base: 'absolute bg-black text-white text-xs font-medium rounded-md px-2 py-1 z-10 select-none transition-opacity pointer-events-none',
        variants: {
            placement: {
                'top': 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
                'top-start': 'bottom-full left-0 mb-2',
                'top-end': 'bottom-full right-0 mb-2',
                'right': 'left-full top-1/2 transform -translate-y-1/2 ml-2',
                'right-start': 'left-full top-0 ml-2',
                'right-end': 'left-full bottom-0 ml-2',
                'bottom': 'top-full left-1/2 transform -translate-x-1/2 mt-2',
                'bottom-start': 'top-full left-0 mt-2',
                'bottom-end': 'top-full right-0 mt-2',
                'left': 'right-full top-1/2 transform -translate-y-1/2 mr-2',
                'left-start': 'right-full top-0 mr-2',
                'left-end': 'right-full bottom-0 mr-2',
            },
            visible: {
                true: 'opacity-1',
                false: 'opacity-0'
            }
        },
        defaultVariants: {
            placement: 'top',
        },
    });

    const handleClick = () => {
        if (showBy === 'click') {
            setVisible(!visible)
        }
    }

    const handleMouseEnter = () => {
        if (showBy === 'hover')
            setVisible(true)
    }

    const handleMouseLeave = () => {
        if (showBy === 'hover')
            setVisible(false)
    }


    return <div ref={targetRef} className='relative'>
        {React.cloneElement(children as React.ReactElement, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave, onClick: handleClick })}
        {/*@ts-ignore*/}
        <Component className={tooltipStyles({ className, placement, visible })} {...props}>{message}</Component >
    </div>

}

export default Tooltip