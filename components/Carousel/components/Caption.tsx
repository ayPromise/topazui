import React from 'react'
import { tv } from 'tailwind-variants';

type CaptionProps = {
    className?: string;
    children: React.ReactNode;
}

const Caption: React.FC<CaptionProps> = ({ className, children }) => {
    const captionStyles = tv({
        base: 'absolute z-10 bottom-[20px] left-1/2 -translate-x-1/2'
    })
    return (
        <div className={captionStyles({ className })}>{children}</div>
    )
}

Caption.displayName = 'caption'

export default Caption