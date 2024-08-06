import React, { ComponentProps, ElementType, OptionHTMLAttributes } from 'react'
import useSelect from '../context/useSelect'
import { OptionType } from '../types';
import StylesProps from '@/types/StylesProps';
import { optionListVariants, optionMenuVariants } from './styles/Option.variants'

type OptionCustomProps<E extends ElementType = ElementType> = {
    children: string;
    value: string;
    as?: E;
} & OptionHTMLAttributes<HTMLOptionElement>

type OptionProps<E extends ElementType> = OptionCustomProps<E> & Omit<ComponentProps<E>, keyof OptionCustomProps>

const defaultElementType = 'option'

const Option = <E extends ElementType = typeof defaultElementType>({ children, className, value, disabled, as: Component = defaultElementType as E, ...props }: OptionProps<E>) => {
    const { selectedOptions, setSelectedOptions, isMultiple, setIsOpen, isList } = useSelect()

    const option: OptionType = {
        title: children,
        value,
        disabled
    }

    const selected = selectedOptions.some(o => o.value === option.value)

    const optionStyles = isList ? optionListVariants({ disabled, selected, className }) : optionMenuVariants({ disabled, selected, className })

    const handleSelect = () => {
        const isOptionSelected = selectedOptions.some(o => o.value === option.value);

        if (isOptionSelected) {
            setSelectedOptions(selectedOptions.filter(o => o.value !== option.value));
        } else {
            if (isMultiple) {
                setSelectedOptions([...selectedOptions, option]);
            } else {
                setIsOpen(false)
                setSelectedOptions([option]);
            }
        }
    };

    //@ts-ignore
    return <Component className={optionStyles} onClick={handleSelect} {...props}>{children}</Component>

}

Option.displayName = "option"

export default Option