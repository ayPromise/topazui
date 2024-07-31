import React from 'react';
import clsx from 'clsx';
import { Option, SelectCustomStyles } from './types';
import OptionComponent from "./OptionComponent"

const Menu: React.FC<{
    options: Option[];
    loading: boolean;
    loadingMessage: string;
    noOptionsMessage: string;
    selectedOptions: Option[];
    handleOptionClick: (option: Option, e: React.MouseEvent) => void;
    customStyles: SelectCustomStyles;
    isMulti: boolean;
}> = ({
    options,
    loading,
    loadingMessage,
    noOptionsMessage,
    selectedOptions,
    handleOptionClick,
    customStyles,
    isMulti
}) => {

        const filteredOptions = isMulti ? options.filter(option =>
            !selectedOptions.some(selected => selected.value === option.value)
        ) : options;
        return (
            <div className={clsx('absolute mt-1 w-full border rounded shadow-lg', customStyles.menuList)}>

                {loading && <div className={clsx('p-2', customStyles.loadingMessage)}>{loadingMessage}</div>}

                {filteredOptions.length === 0 && !loading && <div className={clsx('p-2', customStyles.noOptions)}>{noOptionsMessage}</div>}

                {filteredOptions.map((option, index) => (
                    <OptionComponent
                        key={index}
                        option={option}
                        isSelected={selectedOptions.includes(option)}
                        onClick={handleOptionClick}
                        customStyles={customStyles.option}
                    />
                ))}
            </div>
        );
    };

export default Menu;
