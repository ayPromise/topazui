import React, { AllHTMLAttributes, ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';
import useDropDown from '../context/useDropDown';

type HeaderCustomProps<E extends ElementType = ElementType> = {
    children?: React.ReactNode;
    className?: string;
    as?: E;
}

type HeaderProps<E extends ElementType> = HeaderCustomProps<E> & Omit<ComponentProps<E>, keyof HeaderCustomProps<E>>

const defaultElementType = 'div'



const Header = <E extends ElementType = typeof defaultElementType>({ as: Component = defaultElementType as E, className, ...props }: HeaderProps<E>) => {
    const { isOpen, setIsOpen, shownBy, alignSide } = useDropDown()


    const handleClick = () => {
        if (shownBy === 'click') {
            setIsOpen(!isOpen);
            console.log(23)
        }
    };

    const handleMouseEnter = () => {
        if (shownBy === 'hover') {
            setIsOpen(true);
        }
    };


    const headerStyles = tv({
        base: 'relative cursor-pointer w-full'
    })

    return <>
        {alignSide === 'bottom' && <div className='absolute w-full h-[20px] bottom-[-15px]'></div>}
        {alignSide === 'right' && <div className='absolute w-[20px] h-full bottom-0 right-[-15px]'></div>}
        {alignSide === 'left' && <div className='absolute w-[20px] h-full bottom-0 left-[-15px]'></div>}
        {/** @ts-ignore */}
        <Component onClick={handleClick} onMouseEnter={handleMouseEnter} className={headerStyles({ className })} {...props} />
    </>
}

Header.displayName = 'header'

export default Header