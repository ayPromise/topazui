import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { tv } from "tailwind-variants"
import useSelect from "../../context/useSelect"

const DropDownIcon = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const dropDownIconStyles = tv({ base: 'hover:text-gray-solid flex justify-center items-center cursor-pointer' })
    const { isOpen, setIsOpen } = useSelect()

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return <div className={dropDownIconStyles({ className })} onClick={handleOpen}>{children ? children : <ChevronDownIcon width={18} />}</div>
}

DropDownIcon.displayName = 'dropDownIcon'

export default DropDownIcon