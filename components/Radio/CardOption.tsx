import clsx from 'clsx'
import React from 'react'
import { Option, RadioCustomStyles } from './types'

type CardOptionProps = {
    option: Option
    name: string
    customStyles: RadioCustomStyles
    icon: React.ReactNode
}

const CardOption: React.FC<CardOptionProps> = ({ option, name, customStyles, icon }) => {

    const optionStyles = clsx("flex-1", {
        [customStyles.disabled?.option as string]: option.disabled,
        "cursor-pointer": !option.disabled
    })
    const labelStyles = clsx("inline-flex items-center justify-between p-5 rounded-lg w-full h-full text-gray-500 bg-white hover:text-gray-600 hover:bg-gray-100 border border-gray-200 peer-checked:border-blue-600 peer-checked:text-blue-600",
        { "cursor-pointer": !option.disabled }, customStyles?.label)
    const titleStyles = clsx('row-start-1 text-lg font-semibold', customStyles?.title, {
        [customStyles.disabled?.title as string]: option.disabled
    })
    const descriptionStyles = clsx('row-span-2', customStyles?.description, {
        [customStyles.disabled?.description as string]: option.disabled
    })
    const iconStyles = clsx('', customStyles.icon)


    return (
        <div className={optionStyles} onClick={() => document.getElementById(option.value)?.click()}>
            <input type="radio" id={option.value} name={name} value={option.value} className="appearance-none peer" disabled={option.disabled} />
            <label htmlFor={name} className={labelStyles}>
                <div className="grid grid-rows-3 gap-1">
                    <div className={titleStyles}>{option.title}</div>
                    <div className={descriptionStyles}>{option.description}</div>
                </div>
                <div className={iconStyles}>
                    {icon}
                </div>
            </label>
        </div>
    )
}

export default CardOption