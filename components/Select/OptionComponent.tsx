import React from 'react';
import clsx from 'clsx';
import { Option } from './types';

export type OptionProps = {
    option: Option;
    isSelected: boolean;
    onClick: (option: { title: string; value: string }, e: React.MouseEvent) => void;
    customStyles?: string;
};

const OptionComponent: React.FC<OptionProps> = ({ option, isSelected, onClick, customStyles }) => {
    const handleClick = (option: Option, e: React.MouseEvent) => {
        if (!option.isDisabled)
            onClick(option, e)
    }
    return (
        <div
            className={clsx('p-2 cursor-pointer bg-gray-200 hover:bg-gray-300', customStyles, {
                'bg-gray-400 text-white pointer-events-none': isSelected,
                'bg-gray-400 pointer-events-none cursor-not-allowed opacity-50': option.isDisabled
            })}
            onClick={(e) => handleClick(option, e)}
        >
            {option.title}
        </div >
    );
};

export default OptionComponent;
