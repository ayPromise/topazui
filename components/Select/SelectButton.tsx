import React from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { SelectComponents, SelectCustomStyles, Option } from './types';

const SelectButton: React.FC<{
    isOpen: boolean;
    handleOpen: (e: React.MouseEvent) => void;
    placeholder: string;
    selectedOptions: Option[];
    isMulti: boolean;
    customStyles: SelectCustomStyles;
    components: SelectComponents;
    handleOptionClick: (option: Option, e: React.MouseEvent) => void;
    handleClear: (e: React.MouseEvent) => void;
}> = ({
    isOpen,
    handleOpen,
    placeholder,
    selectedOptions,
    isMulti,
    customStyles,
    components,
    handleOptionClick,
    handleClear
}) => {
        const valueContainerStyles = clsx('flex flex-wrap', customStyles.valueContainer);
        const placeholderStyles = clsx('text-gray-400', customStyles.singleValue);
        const selectedMultiValue = clsx('flex items-center m-1 bg-gray-100 p-1 rounded', customStyles.multiValue);
        const selectedSingleValueStyles = clsx('', customStyles.singleValue);
        const clearIndicatorStyles = clsx('ml-2 cursor-pointer', customStyles.clearIndicator);
        const indicatorsContainerStyles = clsx('flex items-center', customStyles.indicatorsContainer);
        const dropDownIndicatorStyles = clsx('cursor-pointer ml-2', customStyles.dropdownIndicator);

        return (
            <div
                className={clsx(
                    'border rounded p-2 flex justify-between items-center cursor-pointer',
                    customStyles.selectButton
                )}
                onClick={handleOpen}
            >
                <div className={valueContainerStyles}>
                    {selectedOptions.length === 0 && (
                        <div className={placeholderStyles}>{placeholder}</div>
                    )}
                    {isMulti && selectedOptions.length > 0 && selectedOptions.map((option, index) => (
                        <div key={index} className={selectedMultiValue}>
                            {option.title}
                            <span className={clearIndicatorStyles} onClick={(e) => handleOptionClick(option, e)}>
                                {components.ClearIndicator || <XMarkIcon width={18} />}
                            </span>
                        </div>
                    ))}

                    {!isMulti && <div className={selectedSingleValueStyles}>
                        {selectedOptions[0]?.title}
                    </div>}
                </div>
                <div className={indicatorsContainerStyles}>
                    {selectedOptions.length > 0 && (
                        <div className={clearIndicatorStyles} onClick={handleClear}>
                            {components.ClearIndicator || <XMarkIcon width={18} />}
                        </div>
                    )}
                    <div className={dropDownIndicatorStyles}>
                        {components.DropdownIndicator || <ChevronDownIcon width={18} />}
                    </div>
                </div>
            </div>
        );
    };

export default SelectButton;
