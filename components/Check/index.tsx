import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';
import Input from './components/Input';
import extractStaticChildren from '@/utils/extractStaticChildren';
import Label from './components/Label';
import RadioProvider from './context/RadioContext';
import getTextForLabel from './utils/getTextForLabel';

type CheckCustomProps<E extends ElementType = ElementType> = {
    children?: React.ReactNode;
    className?: string;
    name: string;
    id: string;
    as?: E;
}

type CheckProps<E extends ElementType> = CheckCustomProps<E> & Omit<ComponentProps<E>, keyof CheckCustomProps<E>>

const defaultElementType = "div"

const CheckComponent = <E extends ElementType = typeof defaultElementType>({ children, name, className, id, as: Component = defaultElementType as E, ...props }: CheckProps<E>) => {
    const optionStyles = tv({ base: "relative text-gray-900 flex gap-2 items-center cursor-pointer" })

    const { input: inputElement, label: labelElement } = extractStaticChildren(children, [{ component: Input }, { component: Label }])

    //@ts-ignore
    return <Component className={optionStyles({ className })} {...props}>
        {inputElement ? React.cloneElement(inputElement as React.ReactElement, { id: id }) : <Input id={id} />}
        {labelElement ? React.cloneElement(labelElement as React.ReactElement, { htmlFor: id }) : <Label htmlFor={id} >{getTextForLabel(children)}</Label>}
    </Component>
}

const Check = <E extends ElementType = typeof defaultElementType>(props: CheckProps<E>) => {
    return <RadioProvider name={props.name}>
        <CheckComponent {...props} />
    </RadioProvider>
}

export default Object.assign(Check, {
    Input: Input,
    Label: Label
})