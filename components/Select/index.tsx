import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import useOutsideEvent from '@/utils/useOutsideEvent';
import SelectButton from './SelectButton';
import { SelectComponents, SelectCustomStyles, Option } from './types';
import Menu from './Menu';

export type SelectProps = {
    options: Option[];
    isMulti?: boolean;
    placeholder?: string;
    loading?: boolean;
    loadingMessage?: string;
    noOptionsMessage?: string;
    customStyles?: SelectCustomStyles;
    components?: SelectComponents;
    onChange?: (selected: Option | Option[] | null) => void;
    value?: Option | Option[];
    label?: string;
    name?: string;
    isError?: boolean;
    errorMessage?: string;
};

const Select: React.FC<SelectProps> = ({
    options,
    isMulti = false,
    placeholder = 'Select...',
    loading = false,
    loadingMessage = 'Loading...',
    noOptionsMessage = 'No options',
    customStyles = {},
    components = {},
    onChange,
    value,
    label,
    isError = false,
    errorMessage
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);
    const selectRef = useRef<HTMLDivElement>(null);

    useOutsideEvent(selectRef, () => setIsOpen(false));

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option: Option, e: React.MouseEvent) => {
        e.stopPropagation()
        if (isMulti) {
            if (selectedOptions.some(selected => selected.value === option.value)) {
                setSelectedOptions(selectedOptions.filter(selected => selected.value !== option.value));
            } else {
                setSelectedOptions([...selectedOptions, option]);
            }
        } else {
            setSelectedOptions([option]);
            setIsOpen(false);
        }
        onChange && onChange(isMulti ? selectedOptions : option);
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedOptions([]);
        onChange && onChange(isMulti ? [] : null);
    };

    const labelStyles = clsx("block mb-1 ml-1", customStyles.label, { 'text-red-solid': isError && !customStyles.errorLabel }, customStyles.errorLabel)
    const errorMessageStyle = clsx({
        'text-red-solid pl-1 pt-1': !customStyles.errorMessage
    },
        customStyles.errorMessage)

    customStyles.selectButton = clsx(customStyles.selectButton, { "border-2 border-red-solid text-red-solid": isError && !isOpen && !customStyles.selectError }, customStyles.selectError)

    return (
        <div className={clsx('relative min-w-[250px] max-w-[350px]', customStyles.selectContainer)} ref={selectRef}>
            {label && <label className={labelStyles} onClick={() => setIsOpen(true)}>{label}</label>}
            <SelectButton
                isOpen={isOpen}
                handleOpen={handleOpen}
                placeholder={placeholder}
                selectedOptions={selectedOptions}
                isMulti={isMulti}
                customStyles={customStyles}
                components={components}
                handleOptionClick={handleOptionClick}
                handleClear={handleClear}
            />
            {errorMessage && !isOpen && <div className={errorMessageStyle}>{errorMessage}</div>}
            {isOpen && (
                <Menu
                    options={options}
                    loading={loading}
                    loadingMessage={loadingMessage}
                    noOptionsMessage={noOptionsMessage}
                    selectedOptions={selectedOptions}
                    handleOptionClick={handleOptionClick}
                    customStyles={customStyles}
                    isMulti={isMulti}
                />
            )}
        </div>
    );
};

export default Select;