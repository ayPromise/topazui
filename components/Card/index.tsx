import clsx from 'clsx';
import Link from 'next/link';
import React from 'react'

type CardProps = {
    title?: React.ReactNode;
    description?: React.ReactNode;
    path?: string;
    additionalContent?: React.ReactNode;
    image?: React.ReactNode;
    children: any;
    customStyles?: {
        card?: string;
        title?: string;
        description?: string;
    }
}

const Card: React.FC<CardProps> = ({ title, description, additionalContent, path, children }) => {
    const cardStyles = clsx('max-w-sm min-w-64 h-64 p-4 bg-gray-200 rounded-lg grid grid-rows-4')


    if ((title || description) && path)
        return <Link href={path} className={cardStyles}>
            <div className='text-lg font-bold row-start-1'>{title}</div>
            <div className='row-start-2'>{description}</div>
            <div className='row-start-4'>{additionalContent}</div>
        </Link>
    else if (title || description)
        return <div className={cardStyles}>
            <div className='text-lg font-bold row-start-1'>{title}</div>
            <div className='row-start-2'>{description}</div>
            <div className='row-start-4'>{additionalContent}</div>
        </div>

    else
        return <div className={cardStyles}>
            {children}
        </div>


}

export default Card