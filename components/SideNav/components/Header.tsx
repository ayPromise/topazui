import { ChildrenAndStyles } from '@/types'
import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'

type HeaderCustomProps<E extends ElementType = ElementType> = {
    as?: E;
} & ChildrenAndStyles

type HeaderProps<E extends ElementType> = HeaderCustomProps<E> & Omit<ComponentProps<E>, keyof HeaderCustomProps>

const defaultElementType = 'a'

const Header = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: HeaderProps<E>) => {
    const headerStyles = tv({ base: 'ml-3 mb-3 flex items-center gap-2' })
    //@ts-ignore
    return (<Component className={headerStyles({ className })} {...props} />
    )
}

Header.displayName = 'header'

export default Header