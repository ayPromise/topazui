import React, { PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'
import useDropDown from '../context/useDropDown'

const Menu = ({ children }: PropsWithChildren) => {

    const { alignSide, isOpen } = useDropDown()

    const menuStyles = tv({
        base: 'absolute min-w-full bg-gray-200 text-sm text-black opacity-0 pointer-events-none transition-opacity duration-100 flex flex-col',
        variants: {
            alignSide: {
                right: 'top-0 left-[calc(100%+1.1rem)]',
                left: 'top-0 right-[calc(100%+0.5rem)]',
                bottom: 'top-[calc(100%+0.2rem)] left-1/2 -translate-x-1/2',
                top: 'bottom-[calc(100%+0.2rem)] left-1/2 -translate-x-1/2'
            },
            isOpen: {
                true: 'opacity-1 pointer-events-auto',
                false: 'opacity-0 pointer-events-none'
            }
        }
    })

    return <div className={menuStyles({ alignSide, isOpen })}>{children}</div>
}

Menu.displayName = 'menu'

export default Menu
