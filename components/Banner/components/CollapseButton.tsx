import Button, { ButtonCustomProps } from '@/components/Button'
import { ChildrenAndStyles } from '@/types'
import { XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { tv } from 'tailwind-variants'

const CollapseButton = ({ children, className, ...props }: ButtonCustomProps) => {

    const collapseStyles = tv({ base: 'bg-gray-200 text-black flex-shrink-0 inline-flex justify-center w-7 h-7 items-center hover:bg-gray-400 hover:text-white rounded-lg p-1.5' })

    return (
        <Button className={collapseStyles({ className })} {...props}>{children || <XMarkIcon width={20} />}</Button>
    )
}

CollapseButton.displayName = 'collapseButton'

export default CollapseButton