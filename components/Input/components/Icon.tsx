import React, { ComponentProps, ElementType } from 'react'
import { UserIcon as UserIconOutline, EnvelopeIcon as EnvelopeIconOutline, KeyIcon as KeyIconOutline } from "@heroicons/react/24/outline"
import { UserIcon as UserIconSolid, EnvelopeIcon as EnvelopeIconSolid, KeyIcon as KeyIconSolid } from "@heroicons/react/24/solid"
import { iconVariants, IconVariantsType } from "../styles/Icon.variants"
import useInputError from '../context/useInputError';

export type IconCustomProps<E extends ElementType = ElementType> = {
    icon?: 'username' | 'email' | 'password' | 'none';
    iconVariant?: 'solid' | 'outline';
    children?: React.ReactNode;
    className?: string;
    as?: E
} & IconVariantsType

type IconProps<E extends ElementType> = IconCustomProps<E> & Omit<ComponentProps<E>, keyof IconCustomProps<E>>

const defaultElementType = "span"

const Icon = <E extends ElementType = typeof defaultElementType>(
    { icon, iconVariant, children, backgroundVariant, className, as: Component = defaultElementType as E }
        : IconProps<E>) => {

    const { error } = useInputError()
    const iconStyles = iconVariants({ error, backgroundVariant, className })

    const getIconSvg = () => {
        const commonProps = {
            width: 18,
            className: `${error && 'animate-wiggle'}`
        };

        switch (icon) {
            case 'username':
                return iconVariant === 'solid' ? <UserIconSolid {...commonProps} /> : <UserIconOutline {...commonProps} />;
            case 'email':
                return iconVariant === 'solid' ? <EnvelopeIconSolid {...commonProps} /> : <EnvelopeIconOutline {...commonProps} />;
            case 'password':
                return iconVariant === 'solid' ? <KeyIconSolid {...commonProps} /> : <KeyIconOutline {...commonProps} />;
            default:
                return children || null;
        }
    };

    // @ts-ignore
    return <Component className={iconStyles}> {getIconSvg()}</Component >
}

Icon.displayName = 'icon'

export default Icon