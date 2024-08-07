import React, { ComponentProps } from 'react'
import { tv } from 'tailwind-variants';

type LabelProps = { className?: string; } & ComponentProps<'label'>


const Label: React.FC<LabelProps> = ({ className, children, ...props }) => {
    const labelStyles = tv({ base: 'flex select-none cursor-pointer' })

    return (
        <label className={labelStyles({ className })} {...props}>
            {children}
        </label>
    )
}

Label.displayName = "label"

export default Label