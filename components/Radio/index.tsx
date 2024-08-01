import React from 'react'
import { Option, RadioCustomStyles } from "./types"
import clsx from 'clsx';
import DefaultOption from './DefaultOption';
import CardOption from './CardOption';



type RadioProps = {
    name: string;
    options: Option[];
    direction: 'row' | 'column';
    customStyles: RadioCustomStyles;
    optionVariant?: 'default' | 'card';
    icon?: React.ReactNode;
}

const Radio: React.FC<RadioProps> = ({ options, direction = "row", customStyles, name, optionVariant = 'default', icon }) => {
    const radioContainerStyles = clsx('relative flex gap-2',
        {
            'flex-col': direction === "column",
            'flex-row': direction === "row"
        },
        customStyles?.radioContainer
    )

    return <div className={radioContainerStyles}>
        {options.map(option => {
            if (optionVariant === 'card')
                return <CardOption key={option.value} option={option} name={name} customStyles={customStyles} icon={icon}></CardOption>
            else
                return <DefaultOption key={option.value} option={option} name={name} customStyles={customStyles}></DefaultOption>
        })}
    </div >
}

export default Radio