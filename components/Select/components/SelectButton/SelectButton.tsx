import React from 'react'
import useSelect from '../../context/useSelect'
import { tv } from 'tailwind-variants'

const SelectButton = ({ className }: { className?: string; }) => {
    const { isOpen, setIsOpen, selectedOptions } = useSelect()

    const selectStyles = tv({
        base: 'relative min-w-[250px] min-h-[35px] border-2 px-2 py-1 cursor-pointer'
    })

    return (
        <div className={selectStyles({ className })} onClick={() => setIsOpen(!isOpen)}>
            {selectedOptions.length !== 0 && <div>{selectedOptions[0].title}</div>}
        </div>
    )
}

SelectButton.displayName = 'selectButton'

export default SelectButton

