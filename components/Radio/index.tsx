import React from 'react'
import { Option, RadioCustomStyles } from "./types"
import clsx from 'clsx';
import DefaultOption from './DefaultOption';
import CardOption from './CardOption';



type RadioProps = {
    name: string;
    header?: string;
    options: Option[];
    direction: 'row' | 'column';
    customStyles: RadioCustomStyles;
    optionVariant?: 'default' | 'card';
    icon?: React.ReactNode;
}

const Radio: React.FC<RadioProps> = ({ options, direction = "row", customStyles, name, optionVariant = 'default', icon, header }) => {
    const radioContainerStyles = clsx('relative flex gap-2',
        {
            'flex-col': direction === "column",
            'flex-row': direction === "row"
        },
        customStyles?.radioContainer
    )

    const mainContainer = clsx('mb-4', customStyles.mainContainer)

    return <div className={mainContainer}>
        <div className={customStyles.header}>{header}</div>
        <div className={radioContainerStyles}>
            {options.map(option => {
                if (optionVariant === 'card')
                    return <CardOption key={option.value} option={option} name={name} customStyles={customStyles} icon={icon}></CardOption>
                else
                    return <DefaultOption key={option.value} option={option} name={name} customStyles={customStyles}></DefaultOption>
            })}
        </div >
    </div>
}

export default Radio