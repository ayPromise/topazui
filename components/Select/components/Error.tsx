import React, { ElementType } from 'react'

type ErrorCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E;
}

type ErrorProps<E extends ElementType> = ErrorCustomProps<E> & Omit<React.ComponentProps<E>, keyof ErrorCustomProps<E>>

const defaultElementType = 'span'

const Error = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: ErrorProps<E>) => {
    const error = false

    //@ts-ignore
    return error && props.children && <Component className={className || "mt-1 text-sm text-red-solid"} {...props} />
}

Error.displayName = 'error'

export default Error