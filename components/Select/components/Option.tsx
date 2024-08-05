import React, { ComponentProps, ElementType, OptionHTMLAttributes } from 'react'
import useSelect from '../context/useSelect'
import { OptionType } from '../types';
import { tv } from 'tailwind-variants';

type OptionCustomProps<E extends ElementType = ElementType> = {
    children: string;
    value: string;
    as?: E;
} & OptionHTMLAttributes<HTMLOptionElement>

type OptionProps<E extends ElementType> = OptionCustomProps<E> & Omit<ComponentProps<E>, keyof OptionCustomProps>

const defaultElementType = 'option'

const Option = <E extends ElementType = typeof defaultElementType>({ children, className, value, disabled, as: Component = defaultElementType as E, ...props }: OptionProps<E>) => {
    const { selectedOptions, setSelectedOptions, isMultiple, setIsOpen } = useSelect()
    const option: OptionType = {
        title: children,
        value,
        disabled
    }

    const selected = selectedOptions.some(o => o.value === option.value)

    console.log(selected)

    const optionStyles = tv({
        base: 'bg-white hover:bg-gray-200 cursor-pointer p-2 selected:bg-gray-200',
        variants: {
            disabled: {
                true: 'opacity-50 pointer-events-none',
                false: ''
            }
        }
    })


    const handleSelect = () => {
        setIsOpen(false)
        return isMultiple ? setSelectedOptions([...selectedOptions, option]) :
            setSelectedOptions([option])
    }
    //@ts-ignore
    return <Component className={optionStyles({ selected, disabled, className })} onClick={handleSelect} {...props}>{children}</Component>

}

Option.displayName = "option"

export default Option