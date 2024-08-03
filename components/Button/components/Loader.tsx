import clsx from 'clsx';
import React from 'react'

interface DefaultLoaderProps {
    color: string;
}

const DefaultLoader = ({ color }: DefaultLoaderProps) => {
    return (
        <div className={clsx(color, "border-r-transparent border-2 w-4 h-4 rounded-full animate-spin-faster")}>
        </div>
    )
}

export default DefaultLoader