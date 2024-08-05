import React, { PropsWithChildren } from 'react';
import useSelect from '../context/useSelect';
import { tv } from 'tailwind-variants';

const Menu = ({ children, className }: { children: React.ReactNode; className?: string; }) => {

    const { isOpen } = useSelect()
    const menuStyles = tv({ base: 'absolute w-full border shadow-lg top-[50px]' })

    return isOpen && <div className={menuStyles({ className })}>
        {children}
    </div>
};

Menu.displayName = 'menu'

export default Menu;
