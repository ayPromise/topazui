import { ChildrenAndStyles } from '@/types'
import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

type MenuCustomProps<E extends ElementType = ElementType> = {
    as?: E
} & ChildrenAndStyles

type MenuProps<E extends ElementType> = MenuCustomProps<E> & Omit<ComponentProps<E>, keyof MenuCustomProps<E>>

const defaultElementType = 'ul'

const Menu = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: MenuProps<E>) => {
    const menuStyles = tv({
        base: 'h-full px-3 py-4 overflow-y-auto bg-white font-medium flex flex-col gap-3'
    })
    //@ts-ignore
    return <Component className={menuStyles({ className })} {...props} />

}

Menu.displayName = 'menu'

export default Menu