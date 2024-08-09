import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';
import useTabs from '../context/useTabs';

type TabCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    value: any;
    as?: E;
}

type TabProps<E extends ElementType> = TabCustomProps<E> & Omit<ComponentProps<E>, keyof TabCustomProps<E>>

const defaultElementType = 'a'

const Tab = <E extends ElementType = typeof defaultElementType>({ className, value, as: Component = defaultElementType as E, onClick, ...props }: TabProps<E>) => {

    const { setSelectedTab } = useTabs()

    const handleClick = (e: React.MouseEvent) => {
        setSelectedTab(value)
        if (onClick)
            onClick(e)
    }

    const tabStyles = tv({
        base: 'cursor-pointer border-b-2 border-gray-200 hover:border-gray-300 py-1 transition-all flex-1'
    })

    //@ts-ignore
    return <Component onClick={handleClick} className={tabStyles({ className })} {...props} />

}

Tab.displayName = 'Tab'
export default Tab