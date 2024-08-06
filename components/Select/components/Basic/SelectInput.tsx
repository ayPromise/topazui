import React, { useCallback, useEffect } from 'react';
import useSelect from '../../context/useSelect';
import Input from '@/components/Input';
import debounce from '@/utils/debounce';

const SelectInput = () => {
    const { selectedOptions, setSelectedOptions, searchText, setSearchText, setIsOpen } = useSelect();

    useEffect(() => {
        if (selectedOptions.length !== 0) {
            setSearchText(selectedOptions[0].title);
        } else
            setSearchText('')
    }, [selectedOptions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchText(value);
        if (selectedOptions.length !== 0 && value !== selectedOptions[0].title)
            setSelectedOptions([]);



        if (value === '') setIsOpen(false);
        else debounceOpen();
    };

    const debounceOpen = useCallback(debounce(() => {
        setIsOpen(true)
    }, 150), []);

    return <Input type='text' className='w-full border-none' value={searchText} onChange={handleInputChange} />;
};

export default SelectInput;
