import React, { PropsWithChildren } from 'react';
import useSelect from '../context/useSelect';

const Menu = ({ children }: PropsWithChildren) => {

    const { isOpen } = useSelect()

    return isOpen && <div className='absolute w-full border shadow-lg top-[50px]'>
        {children}
    </div>
};

Menu.displayName = 'menu'

export default Menu;
