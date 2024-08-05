import React, { LabelHTMLAttributes, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants';


type LabelProps = PropsWithChildren & Omit<LabelHTMLAttributes<HTMLLabelElement>, keyof PropsWithChildren>

const Label: React.FC<LabelProps> = ({ className, ...props }) => {

    const labelStyles = tv(
        {
            base: 'font-bold'
        }
    )
    return <label className={labelStyles({ className })} {...props} />
}

Label.displayName = 'label'

export default Label