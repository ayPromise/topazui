import React, { useState } from 'react'
import CollapseButton from './components/CollapseButton'
import { tv } from 'tailwind-variants';
import extractStaticChildren from '@/utils/extractStaticChildren';
import Content from './components/Content';

type BannerProps = {
    children: React.ReactNode;
    placement: 'top' | 'bottom';
    className?: string
}

const Banner = ({ children, placement, className }: BannerProps) => {
    const [visible, setIsVisible] = useState<boolean>(true)
    const { collapseButton: collapseButtonElement, content: contentElement } = extractStaticChildren(children, [{ component: CollapseButton }, { component: Content }])
    const bannerStyles = tv({
        base: 'fixed left-1/2 -translate-x-1/2 z-50 flex justify-between w-full py-4 px-8 border-b border-gray-200 bg-gray-100 transition-opacity',
        variants: {
            placement: {
                top: 'top-0',
                bottom: 'bottom-0'
            },
            visible: {
                true: 'opacity-1',
                false: 'opacity-0 pointer-events-none'
            }
        }
    })

    const handleClose = () => setIsVisible(false)

    return (
        <div className={bannerStyles({ className, placement, visible })}>
            {contentElement}
            {(collapseButtonElement && React.cloneElement(collapseButtonElement as React.ReactElement, { onClick: handleClose })) || <CollapseButton onClick={handleClose} />}
        </div>
    )
}

export default Object.assign(Banner, {
    CollapseButton: CollapseButton,
    Content: Content
})