import React, { useEffect, useRef, useState } from 'react';
import DefaultMenuList, { ItemProps } from './DefaultMenuList';
import useOutsideEvent from './utils/useOutsideEvent';
import clsx from 'clsx';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';


export type DropDownProps = {
    HeaderComponent: React.ReactNode;
    MenuComponent?: React.ReactNode;
    menuStyles?: string;
    alignSide?: 'left' | 'center' | 'right';
    arrowIcon?: boolean;
    customIcon?: React.ReactNode;
    iconStyles?: string;
    items: ItemProps[];
    shownBy?: 'click' | 'hover';
    className?: string;
};

const DropDown: React.FC<DropDownProps> = ({
    HeaderComponent,
    MenuComponent,
    menuStyles,
    alignSide = 'center',
    arrowIcon = false,
    customIcon,
    iconStyles,
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
            'top-0 left-0': alignSide === 'left',
            'top-[calc(100%+0.5rem)] left-[50%] translate-x-[-50%]': alignSide === 'center',
            'top-0 left-[calc(100%+0.5rem)]': alignSide === 'right',
        },
        menuStyles
    );

    const resultIconStyles = clsx(
        {
            'absolute right-2 top-[50%] translate-y-[-50%] text-gray-text pointer-events-none text-black peer-hover:text-white': !iconStyles
        },
        iconStyles
    )

    return (
        <div ref={dropDownRef} className={clsx('relative inline-flex px-0', className)} onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <div className='relative inline-block cursor-pointer w-full' onClick={(e) => { e.stopPropagation(); handleClick() }} onMouseEnter={handleMouseEnter}>
                <div className='peer'>{HeaderComponent}</div>
                {arrowIcon && <div className={resultIconStyles}>
                    {alignSide === 'center' && (customIcon || <ChevronDownIcon width={20} />)}
                    {alignSide === 'left' && (customIcon || <ChevronLeftIcon width={20} />)}
                    {alignSide === 'right' && (customIcon || <ChevronRightIcon width={20} />)}
                </div>}
            </div>

            {isOpen &&
                <div className={menuComponentStyles} onClick={(e) => e.stopPropagation()}>
                    {MenuComponent || < DefaultMenuList items={items} />}
                </div>
            }
        </div>
    );
};

export default DropDown;
