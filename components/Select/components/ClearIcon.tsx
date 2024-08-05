import { tv } from "tailwind-variants"
import useSelect from "../context/useSelect"
import { XMarkIcon } from "@heroicons/react/16/solid"

const ClearIcon = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const { setIsOpen, setSelectedOptions } = useSelect()
    const clearIconStyles = tv({ base: 'hover:opacity-30 flex justify-center items-center cursor-pointer' })

    const handleClearAll = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(false)
        return setSelectedOptions([])
    }

    return <div className={clearIconStyles({ className })} onClick={handleClearAll}>
        {children ? children : <XMarkIcon width={18} />}
    </div>
}

ClearIcon.displayName = 'clearIcon'

export default ClearIcon