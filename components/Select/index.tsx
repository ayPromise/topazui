import React, { SelectHTMLAttributes, useRef, useState } from 'react';
import Error from './components/Error'
import Option from './components/Option'
import extractStaticChildren from '@/utils/extractStaticChildren';
import SelectButton from './components/SelectButton/SelectButton';
import useOutsideEvent from '@/hooks/useOutsideEvent';
import SelectProvider from './context/SelectContext';
import useSelect from './context/useSelect';
import Menu from './components/Menu';
import NoOptionsMessage from './components/NoOptionsMessage';
import DropDownIcon from './components/SelectButton/DropDownIcon';
import ClearIcon from './components/SelectButton/ClearIcon';
import IconsContainer from './components/SelectButton/IconsContainer';

export type SelectProps = {
    children: React.ReactNode;
    error?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

const SelectComponent: React.FC<SelectProps> = ({ children }) => {
    const { setIsOpen, error } = useSelect()
    const selectRef = useRef<HTMLDivElement>(null);
    useOutsideEvent(selectRef, () => setIsOpen(false));

    const { noOptionsMessage: noOptionsElement, menu: menuElement, selectButton: selectButtonElement, iconsContainer: iconsContainerElement } = extractStaticChildren(children, [NoOptionsMessage, Menu, SelectButton, IconsContainer])

    return <div className='relative select-none' ref={selectRef}>
        {iconsContainerElement || <IconsContainer />}
        {selectButtonElement || <SelectButton />}
        {menuElement}
        {error && noOptionsElement}
    </div>;
};

const Select: React.FC<SelectProps> = ({ multiple = false, error = false, ...props }) => {

    return <SelectProvider error={error} multiple={multiple}>
        <SelectComponent {...props} />
    </SelectProvider>
}

export default Object.assign(Select, {
    Option: Option,
    Error: Error,
    Menu: Menu,
    Button: SelectButton,
    NoOptionMessage: NoOptionsMessage,
    IconsContainer: IconsContainer
});