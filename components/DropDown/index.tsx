import React, { useRef } from 'react';
import useOutsideEvent from '@/hooks/useOutsideEvent';
import Header from './components/Header';
import Menu from './components/Menu';
import Item from './components/Item';
import useDropDown from './context/useDropDown';
import { DropDownProvider } from './context/DropDownContext';
import Content from './components/Content';
import { tv } from 'tailwind-variants';

export type DropDownProps = {
    shownBy?: 'click' | 'hover';
    alignSide?: 'left' | 'right' | 'bottom' | 'top'
    className?: string;
    children: React.ReactNode;
};

const DropDownComponent: React.FC<DropDownProps> = ({
    className,
    children
}) => {
    const { setIsOpen, shownBy } = useDropDown()

    const handleMouseLeave = () => {
        if (shownBy === 'hover') {
            setIsOpen(false);
        }
    };

    const dropDownRef = useRef<HTMLDivElement>(null);
    const nestedMenuRef = useRef<HTMLDivElement>(null);
    useOutsideEvent(dropDownRef, () => { setIsOpen(false) }, [nestedMenuRef]);

    const dropDownStyles = tv({
        base: 'relative inline-flex w-full'
    })

    return (
        <div ref={dropDownRef} className={dropDownStyles({ className })} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    );
};

const DropDown: React.FC<DropDownProps> = ({ shownBy = 'click', alignSide = 'bottom', ...props }) => {
    return <DropDownProvider shownBy={shownBy} alignSide={alignSide}>
        <DropDownComponent {...props} />
    </DropDownProvider>
}

export default Object.assign(DropDown, {
    Header: Header,
    Menu: Menu,
    Item: Item,
    Content: Content
});
