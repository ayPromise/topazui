import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';

type ItemCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E;
}

type ItemProps<E extends ElementType> = ItemCustomProps<E> & Omit<ComponentProps<E>, keyof ItemCustomProps<E>>

const defaultElementType = 'a'

const Item = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: ItemProps<E>) => {

    const itemStyles = tv({
        base: 'flex gap-2 items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer select-none transition-all duration-100'
    })
    //@ts-ignore
    return (<Component className={itemStyles({ className })} {...props} />
    )
}

Item.displayName = 'item'

export default Item