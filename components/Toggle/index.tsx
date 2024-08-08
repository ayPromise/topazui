import React, { ComponentProps, useState } from 'react'
import { tv } from 'tailwind-variants'
import Label from '../Label'
import { ChildrenAndStyles } from '@/types'
import toggleStyles, { ToggleVariants } from './styles/Toggle.variants'

export type ToggleProps = {
    id: string;
    value: any;
    containerStyles?: string;
} & ChildrenAndStyles & ComponentProps<'input'> & ToggleVariants

const Toggle: React.FC<ToggleProps> = ({ children, className, id, containerStyles, checked, variant, size }) => {

    const labelStyles = tv({
        base: 'inline-flex gap-3 items-center cursor-pointer select-none'
    })


    return <Label htmlFor={id} className={labelStyles({ className: containerStyles })}>
        <input type="checkbox" className="sr-only peer" id={id} />
        <div className={toggleStyles({ className, variant, checked, size })} />
        {children}
    </Label>
}

export default Toggle