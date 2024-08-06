import React from 'react'
import SeparateLine from './components/SeparateLine';
import { tv } from 'tailwind-variants';
import Item from './components/Item';
import Header from './components/Header';
import Menu from './components/Menu';

type SideNavProps = {
    className?: string;
    isOpen?: boolean;
    children: React.ReactNode;
}

const SideNav: React.FC<SideNavProps> = ({ children, className, isOpen = true }) => {
    const sideBarStyles = tv({
        base: "fixed top-0 left-0 z-40 w-64 h-screen transition-transform  border-r-2",
        variants: {
            isOpen: {
                false: '-translate-x-full'
            }
        }
    })

    return (
        <aside id="sidebar" className={sideBarStyles({ className, isOpen })} aria-label="Sidebar">
            {children}
        </aside >
    )
}

export default Object.assign(SideNav,
    {
        Header: Header,
        Menu: Menu,
        SeparateLine: SeparateLine,
        Item: Item

    }
)