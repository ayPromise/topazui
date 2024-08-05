import React, { ElementType, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants';

type NoOptionsMessageCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E
}

type NoOptionsMessageProps<E extends ElementType> = NoOptionsMessageCustomProps<E> & Omit<PropsWithChildren, keyof NoOptionsMessageCustomProps<E>>

const defaultElementType = 'div'

const NoOptionsMessage = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: NoOptionsMessageProps<E>) => {

    const errorStyles = tv({ base: 'text-red-solid font-bold' })
    //@ts-ignore
    return <Component className={errorStyles({ className })} {...props} />

}

NoOptionsMessage.displayName = "noOptionsMessage"

export default NoOptionsMessage