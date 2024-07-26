import clsx from 'clsx';
import React from 'react'

interface DefaultLoaderProps {
    color: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
}

const DefaultLoader = ({ color }: DefaultLoaderProps) => {
    const borderColor = {
        blue: 'border-blue-text',
        gray: 'border-gray-text',
        red: 'border-red-text',
        green: 'border-green-text',
        purple: 'border-purple-text',
        orange: 'border-orange-text',
        teal: 'border-teal-text',
        pink: 'border-pink-text',
        indigo: 'border-indigo-text',
        yellow: 'border-yellow-text',
    };

    return (
        <div className={clsx(borderColor[color], "border-r-transparent border-2 w-4 h-4 rounded-full animate-spin-faster")}>
        </div>
    )
}

export default DefaultLoader