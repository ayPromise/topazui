import React, { ComponentProps, ElementType } from 'react'
import { tv } from 'tailwind-variants';

type BadgeCustomProps<E extends ElementType = ElementType> = {
    children: React.ReactNode;
    className?: string;
    variant: 'default' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink';
    as?: E
}

type BadgeProps<E extends ElementType> = BadgeCustomProps<E> & Omit<ComponentProps<E>, keyof BadgeCustomProps>

const defaultElementType = 'div'

const Badge = <E extends ElementType = typeof defaultElementType>({ children, className, variant, as: Component = defaultElementType as E, ...props }: BadgeProps<E>) => {

    const badgeStyles = tv({
        base: 'inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none',
        variants: {
            variant: {
                default: 'bg-gray-50 text-gray-600 ring-gray-500/10',
                red: 'bg-red-50 text-red-700 ring-red-600/10',
                yellow: 'bg-yellow-50 text-yellow-800 ring-yellow-600/20',
                green: 'bg-green-50 text-green-700 ring-green-600/20',
                blue: 'bg-blue-50 text-blue-700 ring-blue-700/10',
                indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
                purple: 'bg-purple-50 text-purple-700 ring-purple-700/10',
                pink: 'bg-pink-50 text-pink-700 ring-pink-700/10',
            },
        },
    })

    //@ts-ignore
    return <Component className={badgeStyles({ className, variant })} {...props}>{children}</Component>

}

export default Badge