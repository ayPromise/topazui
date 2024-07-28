import React from 'react'
import { UserIcon as UserIconOutline, EnvelopeIcon as EnvelopeIconOutline, KeyIcon as KeyIconOutline } from "@heroicons/react/24/outline"
import { UserIcon as UserIconSolid, EnvelopeIcon as EnvelopeIconSolid, KeyIcon as KeyIconSolid } from "@heroicons/react/24/solid"
import clsx from 'clsx';

export type IconTypes = {
    icon: 'username' | 'email' | 'password' | 'none';
    iconVariant: 'solid' | 'outline';
    customIcon: React.ReactNode;
    backgroundStyle: string;
    isError: boolean;
}

const Icon: React.FC<IconTypes> = ({ icon, iconVariant, customIcon, backgroundStyle, isError }) => {
    const isDefaultStyle = backgroundStyle === 'separate' || backgroundStyle === 'flat'
    const errorStyles = 'border-red-solid text-red-solid'

    let defaultIconStyle = clsx(
        'absolute top-[50%] translate-y-[-50%] w-[45px] h-full rounded-l flex justify-center items-center text-[10px]',
        {
            'border-gray-solid border-r-2 peer-invalid:border-red-500': backgroundStyle === 'separate',
            [backgroundStyle]: !isDefaultStyle,
            [errorStyles]: isError
        }
    )


    let iconSvg: React.ReactNode
    switch (icon) {
        case 'username':
            iconSvg = iconVariant === 'solid' ?
                <UserIconSolid width={18} className={clsx({ 'animate-wiggle': isError })} />
                :
                <UserIconOutline width={18} className={clsx({ 'animate-wiggle': isError })} />
            break;
        case 'email':
            iconSvg = iconVariant === 'solid' ?
                <EnvelopeIconSolid width={18} className={clsx({ 'animate-wiggle': isError })} />
                :
                <EnvelopeIconOutline width={18} className={clsx({ 'animate-wiggle': isError })} />
            break;
        case 'password':
            iconSvg = iconVariant === 'solid' ?
                <KeyIconSolid width={18} className={clsx({ 'animate-wiggle': isError })} />
                :
                <KeyIconOutline width={18} className={clsx({ 'animate-wiggle': isError })} />
            break;
        default:
            if (customIcon) {
                iconSvg = customIcon
                break;
            }
            return null;
    }

    return <span className={defaultIconStyle}> {iconSvg}</span >
}

export default Icon