import React, { SelectHTMLAttributes, useRef } from 'react';
import extractStaticChildren from '@/utils/extractStaticChildren';
import useOutsideEvent from '@/hooks/useOutsideEvent';
import SelectProvider from './context/SelectContext';
import useSelect from './context/useSelect';
import { IconsContainer, Menu, NoOptionsMessage, SelectButton, Option, Error } from './components';

export type SelectProps = {
    children: React.ReactNode;
    error?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

const SelectComponent: React.FC<SelectProps> = ({ children }) => {
    const { setIsOpen, error } = useSelect()
    const selectRef = useRef<HTMLDivElement>(null);
    useOutsideEvent(selectRef, () => setIsOpen(false));

    const { noOptionsMessage: noOptionsElement, menu: menuElement, selectButton: selectButtonElement } = extractStaticChildren(children, [NoOptionsMessage, Menu, SelectButton])

    return <div className='relative select-none' ref={selectRef}>
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