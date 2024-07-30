import React, { useRef, useState } from 'react';
import DefaultMenuList, { ItemProps } from './DefaultMenuList';
import useOutsideEvent from './utils/useOutsideEvent';
import clsx from 'clsx';

export type DropDownProps = {
    HeaderComponent: React.ReactNode;
    MenuComponent?: React.ReactNode;
    menuStyles?: string;
    itemStyles?: string;
    alignSide?: 'left' | 'center' | 'right';
    items: ItemProps[];
    shownBy?: 'click' | 'hover';
    animation?: 'fade' | 'fadeSlide' | 'none';
    selectFlag?: boolean;
    selectIndicator?: React.ReactNode;
    selectedStyles?: string;
    className?: string;
};

const DropDown: React.FC<DropDownProps> = ({
    HeaderComponent,
    MenuComponent,
    menuStyles,
    itemStyles,
    alignSide = 'center',
    items,
    shownBy = 'click',
    animation = 'fadeSlide',
    selectFlag = false,
    selectIndicator,
    selectedStyles,
    className
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const nestedMenuRef = useRef<HTMLDivElement>(null);

    useOutsideEvent(dropDownRef, () => { setIsOpen(false) }, [nestedMenuRef]);

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

    const isItLeftSideMenu = alignSide === 'left';
    const isItCenteredMenu = alignSide === 'center';
    const isItRightSideMenu = alignSide === 'right';

    const isAnimationSlideOn = animation === 'fadeSlide';
    const isAnimationFadeOn = animation === 'fade';

    const menuComponentStyles = clsx(
        'absolute min-w-full bg-gray-200 shadow-2xl rounded text-sm text-black',
        {
            'top-0 right-[calc(100%+0.5rem)]': isItLeftSideMenu,
            'top-[calc(100%+0.5rem)]': isItCenteredMenu,
            'top-0 left-[calc(100%+0.5rem)]': isItRightSideMenu,

            'pointer-events-none': !isOpen,

            'visible animate-fadeInLeft': isAnimationSlideOn && isOpen && isItLeftSideMenu,
            'animate-fadeOutRight opacity-0': isAnimationSlideOn && !isOpen && isItLeftSideMenu,

            'visible animate-fadeInDown': isAnimationSlideOn && isOpen && isItCenteredMenu,
            'animate-fadeOutUp opacity-0': isAnimationSlideOn && !isOpen && isItCenteredMenu,

            'visible animate-fadeInRight': isAnimationSlideOn && isOpen && isItRightSideMenu,
            'animate-fadeOutLeft opacity-0': isAnimationSlideOn && !isOpen && isItRightSideMenu,
        },
        menuStyles
    );

    return (
        <div ref={dropDownRef} className={clsx('relative inline-flex px-0', className)} onClick={handleClick} onMouseLeave={handleMouseLeave}>
            <div className='relative inline-block cursor-pointer w-full' onClick={(e) => { e.stopPropagation(); handleClick() }} onMouseEnter={handleMouseEnter}>
                <div className={clsx({ [selectedStyles as string]: isOpen })}>{HeaderComponent}</div>
                {selectFlag && (selectIndicator || <div className={clsx('absolute bottom-0 left-0 h-0.5 bg-green-solid transition-all duration-300', {
                    'w-full': isOpen,
                    'w-0': !isOpen,
                })}></div>)}
            </div>

            {alignSide === 'center' && <div className='absolute w-full h-[40px] bottom-[-35px]'></div>}
            {alignSide === 'right' && <div className='absolute w-[40px] h-full bottom-0 right-[-35px]'></div>}
            {alignSide === 'left' && <div className='absolute w-[40px] h-full bottom-0 left-[-35px]'></div>}

            <div ref={nestedMenuRef} className={menuComponentStyles} onClick={(e) => e.stopPropagation()}>
                {MenuComponent || <DefaultMenuList items={items} customItemStyles={itemStyles} />}
            </div>
        </div>
    );
};

export default DropDown;
