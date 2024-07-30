import React, { useEffect, useRef, useState } from 'react';
import DefaultMenuList, { ItemProps } from './DefaultMenuList';
import useOutsideEvent from './utils/useOutsideEvent';
import clsx from 'clsx';


export type DropDownProps = {
    HeaderComponent: React.ReactNode;
    MenuComponent?: React.ReactNode;
    menuStyles?: string;
    alignSide?: 'left' | 'center' | 'right';
    items: ItemProps[];
    shownBy?: 'click' | 'hover';
    className?: string;
};

const DropDown: React.FC<DropDownProps> = ({
    HeaderComponent,
    MenuComponent,
    menuStyles,
    alignSide = 'center',
    items,
    shownBy = 'click',
    className
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropDownRef = useRef<HTMLDivElement>(null)
    useOutsideEvent(dropDownRef, () => setIsOpen(false))

    const handleClick = () => {
        if (shownBy === 'click') {
            setIsOpen((prev) => !prev);
        }
    };

    const handleMouseEnter = () => {
        if (shownBy === 'hover') {
            setIsOpen(true);
        }
    };

    const handleMouseLeave = () => {
        if (shownBy === 'hover') {
            setIsOpen(false);
        }
    };

    const menuComponentStyles = clsx(
        'absolute min-w-full',
        {
            'top-0 right-[calc(100%+0.5rem)]': alignSide === 'left',
            'top-[calc(100%+0.5rem)]': alignSide === 'center',
            'top-0 left-[calc(100%+0.5rem)]': alignSide === 'right',

            'visible animate-fadeInDown': isOpen && alignSide === 'center',
            'animate-fadeOutUp opacity-0': !isOpen && alignSide === 'center',

            'visible animate-fadeInRight': isOpen && alignSide === 'right',
            'animate-fadeOutLeft opacity-0': !isOpen && alignSide === 'right',

            'visible animate-fadeInLeft': isOpen && alignSide === 'left',
            'animate-fadeOutRight opacity-0': !isOpen && alignSide === 'left',

        },
        menuStyles
    );

    return (
        <div ref={dropDownRef} className={clsx('relative inline-flex px-0', className)} onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <div className='relative inline-block cursor-pointer w-full' onClick={(e) => { e.stopPropagation(); handleClick() }} onMouseEnter={handleMouseEnter}>
                {HeaderComponent}
            </div>

            {alignSide == 'center' && <div className='absolute w-full h-[20px] bottom-[-20px]'></div>}
            {alignSide == 'right' && <div className='absolute w-[20px] h-full bottom-0 right-[-20px]'></div>}
            {alignSide == 'left' && <div className='absolute w-[20px] h-full bottom-0 left-[-20px]'></div>}


            <div className={menuComponentStyles} onClick={(e) => e.stopPropagation()}>
                {MenuComponent || < DefaultMenuList items={items} />}
            </div>
        </div>
    );
};

export default DropDown;
