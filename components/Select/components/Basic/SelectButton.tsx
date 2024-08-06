import React, { Children } from 'react';
import { tv } from 'tailwind-variants';
import extractStaticChildren from '@/utils/extractStaticChildren';
import IconsContainer from './IconsContainer';
import { ChildrenAndStyles } from '@/types';
import SelectInput from './SelectInput';
import useSelect from '../../context/useSelect';
import ClearIcon from './ClearIcon';
import { OptionType } from '../../types';

const SelectButton = ({ children, className }: ChildrenAndStyles) => {
    const { iconsContainer: iconsContainerElement, selectInput: selectInputElement } = extractStaticChildren(children, [IconsContainer, SelectInput]);
    const { withInput, selectedOptions, setSelectedOptions, setIsOpen, isOpen, isMultiple } = useSelect()

    console.log(children)

    let value: OptionType | OptionType[]

    if (!isMultiple && selectedOptions.length !== 0) {
        value = selectedOptions[0]
    } else if (isMultiple && selectedOptions.length !== 0) {
        value = [...selectedOptions]
    } else value = []

    const selectStyles = tv({
        base: 'relative border-2 pl-2 flex items-center',
        variants: {
            withInput: {
                false: 'min-w-[200px] min-h-10 cursor-pointer'
            }
        }
    });

    //@ts-ignore
    const inputStyles = selectInputElement?.props?.className ?? '';

    const handleClick = () => {
        !withInput && setIsOpen(!isOpen)

    }

    const handleRemoveOption = (e: React.MouseEvent, option: OptionType) => {
        e.stopPropagation()
        setSelectedOptions([...selectedOptions.filter(o => o.value !== option.value)])
    }

    return (
        <div className={selectStyles({ className, withInput })} onClick={handleClick}>
            {withInput && ((Children.count(selectInputElement) && selectInputElement) || <SelectInput className={inputStyles} />)}
            {!withInput && isMultiple && Array.isArray(value) && <div className='flex gap-1 flex-wrap max-w-[170px] py-1'>
                {value.map(o => <div key={o.value} className='bg-gray-200 rounded px-2 flex items-center justify-center' >{o.title} <ClearIcon action={(e) => handleRemoveOption(e, o)} /></div>)}
            </div>}

            {!isMultiple && !Array.isArray(value) && !withInput && <div className='flex gap-1 flex-wrap max-w-[170px]'>
                {value.title}
            </div>}

            {iconsContainerElement || <IconsContainer />}
        </div>
    );
};

SelectButton.displayName = 'selectButton';

export default SelectButton;
