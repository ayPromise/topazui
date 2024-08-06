import React, { ComponentProps, ElementType } from 'react'
import useDropDown from '../context/useDropDown';
import { tv } from 'tailwind-variants';

type ContentCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    as?: E;
}

type ContentProps<E extends ElementType> = ContentCustomProps<E> & Omit<ComponentProps<E>, keyof ContentCustomProps<E>>

const defaultElementType = 'div'

const Content = <E extends ElementType = typeof defaultElementType>({ as: Component = defaultElementType as E, className, ...props }: ContentProps<E>) => {
    const { isOpen, alignSide } = useDropDown()

    const contentStyles = tv({
        base: 'absolute opacity-0 transition-opacity',
        variants: {
            alignSide: {
                right: 'top-0 left-[calc(100%+1.1rem)]',
                left: 'top-0 right-[calc(100%+0.5rem)]',
                bottom: 'top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2',
                top: 'bottom-[calc(100%+0.1rem)] left-1/2 -translate-x-1/2'
            },
            isOpen: {
                true: 'opacity-1 pointer-events-auto',
                false: 'opacity-0 pointer-events-none'
            }
        }
    })
    //@ts-ignore
    return <Component className={contentStyles({ className, alignSide, isOpen })} {...props} />

}

export default Content