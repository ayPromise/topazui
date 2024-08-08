import { ChildrenAndStyles } from '@/types'
import React, { AllHTMLAttributes, ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

type TextLinkProps = ChildrenAndStyles & AllHTMLAttributes<HTMLAnchorElement>

const TextLink = ({ className, ...props }: TextLinkProps) => {
    const linkStyles = tv({
        base: 'text-blue-600 hover:underline'
    })
    return (
        <a className={linkStyles({ className })} {...props} />
    )
}

export default TextLink