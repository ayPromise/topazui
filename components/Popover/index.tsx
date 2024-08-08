import React, { useState } from 'react'
import { tv } from 'tailwind-variants';
import Content from './components/Content';
import usePopover from './context/usePopover';
import PopoverProvider from './context/PopoverProvider';
import Trigger from './components/Trigger';

type PopoverProps = {
    children: React.ReactNode;
    className?: string;
}

const PopoverComponent = ({ children }: PopoverProps) => {

    const { setVisible } = usePopover()

    const handleMouseEnter = () => {
        setVisible(true)
    }

    const handleMouseLeave = () => {
        setVisible(false)
    }



    return <div className='relative' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
    </div>
}

const Popover = (props: PopoverProps) => {
    return <PopoverProvider>
        <PopoverComponent {...props} />
    </PopoverProvider>
}

export default Object.assign(Popover, {
    Trigger: Trigger,
    Content: Content
})