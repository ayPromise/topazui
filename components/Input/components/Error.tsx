import React, { ElementType } from 'react'
import useInputError from '../context/useInputError';

type ErrorCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E;
}

type ErrorProps<E extends ElementType> = ErrorCustomProps<E> & Omit<React.ComponentProps<E>, keyof ErrorCustomProps<E>>

const defaultElementType = 'span'

const Error = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: ErrorProps<E>) => {
    const { error } = useInputError()

    //@ts-ignore
    return error && props.children && <Component className={className || "mt-1 text-sm text-red-solid"} {...props} />
}

Error.displayName = 'error'

export default Error