import { ChildrenAndStyles } from '@/types'
import Link from 'next/link'
import React, { AllHTMLAttributes, ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

type TextLinkProps = ChildrenAndStyles & AllHTMLAttributes<HTMLAnchorElement>

const TextLink = ({ className, href, ...props }: TextLinkProps) => {
    const isStorybook = process.env.STORYBOOK === 'true';

    const linkStyles = tv({
        base: 'text-blue-600 hover:underline cursor-pointer'
    })
    if (isStorybook)
        return <a className={linkStyles({ className })} {...props} />
    else
        return <Link href={href || ''} className={linkStyles({ className })} {...props} />

}

export default TextLink