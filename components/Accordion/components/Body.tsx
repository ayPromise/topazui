import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'
import useItem from '../context/useItem'


type BodyCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E
}

type BodyProps<E extends ElementType> = BodyCustomProps<E> & Omit<ComponentProps<E>, keyof BodyCustomProps<E>>

const defaultElementType = 'h2'

const Body = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: BodyProps<E>) => {
    const { visible } = useItem()

    const bodyStyles = tv({
        base: 'transition-all duration-300 overflow-hidden',
        variants: {
            visible: {
                true: 'max-h-[500px] opacity-100',
                false: 'max-h-0 opacity-0'
            }
        }
    })

    //@ts-ignore
    return <Component className={bodyStyles({ className, visible })} {...props} />


}

export default Body