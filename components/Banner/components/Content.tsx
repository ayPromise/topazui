import { ChildrenAndStyles } from '@/types'
import React from 'react'
import { tv } from 'tailwind-variants'

const Content = ({ children, className }: ChildrenAndStyles) => {
    const contentStyles = tv({
        base: 'flex justify-center items-center mx-auto'
    })
    return (
        <div className={contentStyles({ className })}>{children}</div>
    )
}

Content.displayName = 'content'

export default Content