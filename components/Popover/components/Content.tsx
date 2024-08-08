import React from 'react'
import { tv } from 'tailwind-variants';
import usePopover from '../context/usePopover';

type ContentProps = {
    children: React.ReactNode
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
}

const Content: React.FC<ContentProps> = ({ className, placement, children }) => {

    const { visible } = usePopover()

    const popoverStyles = tv({
        base: 'absolute bg-white shadow-xl rounded transition-opacity',
        variants: {
            visible: {
                true: 'opacity-1',
                false: 'opacity-0'
            },
            placement: {
                'top': 'bottom-full left-1/2 transform -translate-x-1/2',
                'top-start': 'bottom-full left-0',
                'top-end': 'bottom-full right-0',
                'right': 'left-full top-1/2 transform -translate-y-1/2',
                'right-start': 'left-full top-0',
                'right-end': 'left-full bottom-0',
                'bottom': 'top-full left-1/2 transform -translate-x-1/2',
                'bottom-start': 'top-full left-0',
                'bottom-end': 'top-full right-0',
                'left': 'right-full top-1/2 transform -translate-y-1/2',
                'left-start': 'right-full top-0',
                'left-end': 'right-full bottom-0',
            },
        }
    })


    return (
        <div className={popoverStyles({ visible, className, placement })}>
            {children}
        </div>
    )
}

Content.displayName = 'content'

export default Content