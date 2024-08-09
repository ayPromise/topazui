import React, { ComponentProps, ElementType } from 'react'
import useTabs from '../context/useTabs';
import { tv } from 'tailwind-variants';

type TabPanelCustomProps<E extends ElementType = ElementType> = {

    children: React.ReactNode;
    className?: string;
    value: any;
    as?: E
}

type TabPanelProps<E extends ElementType> = TabPanelCustomProps<E> & Omit<ComponentProps<E>, keyof TabPanelCustomProps<E>>

const defaultElementType = 'div'

const TabPanel = <E extends ElementType = typeof defaultElementType>({ as: Component = defaultElementType as E, className, value, ...props }: TabPanelProps<E>) => {

    const { selectedTab } = useTabs()

    console.log(selectedTab === value)


    const panelStyles = tv({
        base: '',
        variants: {
            active: {
                true: 'visible',
                false: 'hidden'
            }
        }
    })
    //@ts-ignore
    return <Component className={panelStyles({ className, active: selectedTab === value })} {...props} />

}

export default TabPanel