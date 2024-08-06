import React, { Children } from 'react';
import useSelect from '../../context/useSelect';
import { tv } from 'tailwind-variants';
import { ChildrenAndStyles } from '@/types';
import Option from '../Option';

const Menu = ({ children, className }: ChildrenAndStyles) => {

    const { isOpen, searchText } = useSelect()
    const menuStyles = tv({ base: 'absolute w-full border shadow-lg top-[110%] max-h-[145px] overflow-y-auto' })

    const filteredChildren = React.Children.toArray(children).filter((child) => {
        if (React.isValidElement(child)) {
            const { children } = child.props;
            if (typeof children === 'string') {
                return children.toLowerCase().includes(searchText.toLowerCase());
            }
        }
        return false;
    });

    return isOpen && <div className={menuStyles({ className })}>
        {filteredChildren.length !== 0 ? filteredChildren : <div className='p-2'>No items</div>}
    </div>
};

Menu.displayName = 'menu'

export default Menu;
