import clsx from 'clsx'
import React from 'react'
import { Option, RadioCustomStyles } from './types'

type DefaultOptionProps = {
    option: Option
    name: string
    customStyles: RadioCustomStyles
}

const DefaultOption: React.FC<DefaultOptionProps> = ({ option, name, customStyles }) => {

    const optionStyles = clsx("relative text-gray-900 flex gap-2 items-center cursor-pointer", {
        'opacity-30': option.disabled

    })

    const radioButtonStyles = clsx('appearance-none peer size-4 bg-gray-100 rounded-full checked:border-blue-solid border-2 cursor-pointer', customStyles?.radioButton)
    const optionChecked = clsx('size-2 peer-checked:bg-blue-solid absolute rounded-full pointer-events-none', customStyles.optionChecked)
    const labelStyles = clsx("text-sm font-medium cursor-pointer flex justify-center items-center",
        customStyles?.label)
    const titleStyles = clsx('align-middle', customStyles?.title)
    const descriptionStyles = clsx('block max-w-[200px] ml-6 text-[10px] cursor-pointer', customStyles?.description)


    return (
        <div key={option.title} onClick={() => document.getElementById(option.value)?.click()}>
            <div className={optionStyles}>
                <div className='relative flex justify-center items-center'>
                    <input id={option.value} type="radio" name={name} value={option.value} className={radioButtonStyles} disabled={option.disabled} />
                    <div className={optionChecked}></div>
                </div>
                <label className={labelStyles} htmlFor={option.value}>
                    <div className={titleStyles}>{option.title}</div>
                </label>
            </div>
            <p className={descriptionStyles}>{option.description}</p>

        </div>
    )
}

export default DefaultOption