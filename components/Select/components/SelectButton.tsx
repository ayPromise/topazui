import React from 'react'
import useSelect from '../context/useSelect'
import { tv } from 'tailwind-variants'
import extractStaticChildren from '@/utils/extractStaticChildren';
import IconsContainer from './IconsContainer';

const SelectButton = ({ children, className }: { children?: React.ReactNode, className?: string; }) => {
    const { isOpen, setIsOpen, selectedOptions } = useSelect()
    const { iconsContainer: iconsContainerElement } = extractStaticChildren(children, [IconsContainer])

    const selectStyles = tv({
        base: 'relative min-w-[250px] min-h-[45px] border-2 p-2 cursor-pointer'
    })

    return (
        <div className={selectStyles({ className })} onClick={() => setIsOpen(!isOpen)}>
            {selectedOptions.length !== 0 && selectedOptions[0].title}
            {iconsContainerElement || <IconsContainer />}
        </div>
    )
}

SelectButton.displayName = 'selectButton'

export default SelectButton

