import React, { ComponentProps, ElementType, OptionHTMLAttributes } from 'react'
import useSelect from '../context/useSelect'
import { OptionType } from '../types';

type OptionCustomProps<E extends ElementType = ElementType> = {
    children: string;
    value: string;
    as?: E;
} & OptionHTMLAttributes<HTMLOptionElement>

type OptionProps<E extends ElementType> = OptionCustomProps<E> & Omit<ComponentProps<E>, keyof OptionCustomProps>

const defaultElementType = 'option'

const Option = <E extends ElementType = typeof defaultElementType>({ children, value, disabled, as: Component = defaultElementType as E, ...props }: OptionProps<E>) => {
    const { selectedOptions, setSelectedOptions, isMultiple, setIsOpen } = useSelect()
    const option: OptionType = {
        title: children,
        value,
        disabled
    }

    const style = selectedOptions.some(o => o.value === option.value) && 'bg-gray-300 pointer-events-none'


    const handleSelect = () => {
        setIsOpen(false)
        return isMultiple ? setSelectedOptions([...selectedOptions, option]) :
            setSelectedOptions([option])
    }
    //@ts-ignore
    return <Component className={`bg-white hover:bg-gray-200 cursor-pointer p-2 ${style}`} onClick={handleSelect} {...props}>{children}</Component>

}

Option.displayName = "option"

export default Option