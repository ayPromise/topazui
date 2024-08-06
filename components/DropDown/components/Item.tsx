import React, { ComponentProps, ElementType, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants';

type ItemCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    as?: E;
}

type ItemProps<E extends ElementType> = ItemCustomProps<E> & Omit<ComponentProps<E>, keyof ItemCustomProps<E>>

const defaultElementType = 'a'

const Item = <E extends ElementType = typeof defaultElementType>({ className, disabled = false, as: Component = defaultElementType as E, ...props }: ItemProps<E>) => {
    const itemStyles = tv({
        base: 'px-4 py-2 hover:bg-gray-300 select-none border-0',
        variants: {
            disabled: {
                true: 'opacity-30 cursor-default pointer-events-none',
                false: 'cursor-pointer'
            }
        }
    })

    //@ts-ignore
    return <Component className={itemStyles({ className, disabled })} {...props} />

}

Item.displayName = 'item'

export default Item