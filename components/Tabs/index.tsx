import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';
import TabsProvider from './context/TabsProvider';

type TabListCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    direction: 'row' | 'column';
    as?: E
}

type TabListProps<E extends ElementType> = TabListCustomProps<E> & Omit<ComponentProps<E>, keyof TabListCustomProps<E>>

const defaultElementType = 'ul'

const TabList = <E extends ElementType = typeof defaultElementType>(
    {
        className,
        as: Component = defaultElementType as E,
        direction,
        ...props
    }: TabListProps<E>
) => {

    const TabListContainerStyles = tv({
        base: 'flex transition-all',
        variants: {
            direction: {
                row: '',
                column: 'flex-col'
            }
        }
    })

    return <TabsProvider>
        {/*@ts-ignore*/}
        <Component className={TabListContainerStyles({ className, direction })} {...props} />
    </TabsProvider>

}

export default TabList