import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { tv } from "tailwind-variants"
import useSelect from "../../context/useSelect"
import { ChildrenAndStyles } from "@/types"

const DropDownIcon = ({ children, className }: ChildrenAndStyles) => {
    const dropDownIconStyles = tv({ base: 'hover:opacity-80 flex justify-center items-center cursor-pointer h-full border-l-2' })
    const { isOpen, setIsOpen } = useSelect()

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }
    return <div className={dropDownIconStyles({ className })} onClick={handleOpen}>{children ? children : <ChevronDownIcon width={18} />}</div>
}

DropDownIcon.displayName = 'dropDownIcon'

export default DropDownIcon