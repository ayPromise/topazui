import extractStaticChildren from "@/utils/extractStaticChildren"
import { tv } from "tailwind-variants"
import useSelect from "../context/useSelect"
import ClearIcon from "./ClearIcon"
import DropDownIcon from "./DropDownIcon"
import { Children } from "react"

const IconsContainer = ({ children, className }: { children?: React.ReactNode, className?: string }) => {
    const iconsContainerStyles = tv({ base: 'absolute top-1/2 -translate-y-1/2 right-0 flex justify-center z-10' })
    const { dropDownIcon: dropDownIconElement, clearIcon: clearIconElement } = extractStaticChildren(children, [DropDownIcon, ClearIcon])
    const { selectedOptions } = useSelect()

    const clearStyles = clearIconElement?.props?.className ?? '';
    const dropStyles = dropDownIconElement?.props?.className ?? '';


    return <div className={iconsContainerStyles({ className })}>
        {selectedOptions.length !== 0 && (Children.count(clearIconElement) && clearIconElement || <ClearIcon className={clearStyles} />)}
        {Children.count(dropDownIconElement) && dropDownIconElement || <DropDownIcon className={dropStyles} />}
    </div >
}

IconsContainer.displayName = 'iconsContainer'

IconsContainer.DropDownIcon = DropDownIcon
IconsContainer.ClearIcon = ClearIcon

export default IconsContainer
