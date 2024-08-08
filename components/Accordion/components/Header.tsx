import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants'
import useItem from '../context/useItem'
import useAccordion from '../context/useAccordion';

type HeaderCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    as?: E
}

type HeaderProps<E extends ElementType> = HeaderCustomProps<E> & Omit<ComponentProps<E>, keyof HeaderCustomProps<E>>

const defaultElementType = 'h2'

const Header = <E extends ElementType = typeof defaultElementType>({ className, as: Component = defaultElementType as E, ...props }: HeaderProps<E>) => {
    const { visible, setVisible } = useItem()
    const { items, setItems, multipleSelection } = useAccordion()

    const handleVisible = () => {
        if (multipleSelection) {
            setVisible(!visible);
        } else {
            setVisible(!visible);
        }
    };

    const headerStyles = tv({
        base: 'flex cursor-pointer items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 focus:ring-4 focus:ring-blue-200 hover:bg-blue-100 gap-3 z-10',
    })


    //@ts-ignore
    return <Component className={headerStyles({ className, visible })} onClick={handleVisible} {...props} />
}

export default Header