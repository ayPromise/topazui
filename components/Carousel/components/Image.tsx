import React from 'react'
import { tv } from 'tailwind-variants';

type ImageProps = {
    src?: string;
    placeholder?: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({ src, placeholder, className }) => {
    const imageStyles = tv({
        base: 'bg-gray-200 rounded flex justify-center items-center w-full h-full select-none'
    })
    return (
        <div className={imageStyles({ className })}>
            {placeholder}
        </div>
    )
}

Image.displayName = 'image'

export default Image