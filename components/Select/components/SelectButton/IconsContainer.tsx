import extractStaticChildren from "@/utils/extractStaticChildren"
import { tv } from "tailwind-variants"
import DropDownIcon from "./DropDownIcon"
import ClearIcon from "./ClearIcon"
import useSelect from "../../context/useSelect"

const IconsContainer = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const iconsContainerStyles = tv({ base: 'absolute top-1/2 -translate-y-1/2 right-2 flex items-center z-10' })
    const { dropDownIcon: dropDownIconElement, clearIcon: clearIconElement } = extractStaticChildren(children, [DropDownIcon, ClearIcon])
    const { selectedOptions } = useSelect()


    return <div className={iconsContainerStyles({ className })}>
        {selectedOptions.length !== 0 && (clearIconElement || <ClearIcon />)}
        {dropDownIconElement || <DropDownIcon />}
    </div >
}

IconsContainer.displayName = 'iconsContainer'

IconsContainer.DropDownIcon = DropDownIcon
IconsContainer.ClearIcon = ClearIcon

export default IconsContainer
