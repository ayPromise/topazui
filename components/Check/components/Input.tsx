import React, { ComponentProps } from 'react'
import useRadio from '../context/useRadio'
import { tv } from 'tailwind-variants';


type InputProps = { className?: string; } & ComponentProps<'input'>

const Input: React.FC<InputProps> = ({ id, className, ...props }) => {
    const { name: radioName } = useRadio()

    const inputStyle = tv({
        base: 'size-4  peer'
    });


    return <input type="radio" name={radioName} id={id} className={inputStyle({ className })} {...props} />


}

Input.displayName = 'input'

export default Input