import extractStaticChildren from "@/utils/extractStaticChildren"
import { tv } from "tailwind-variants"
import useSelect from "../../context/useSelect"
import ClearIcon from "./ClearIcon"
import DropDownIcon from "./DropDownIcon"
import { Children } from "react"
import { ChildrenAndStyles } from "@/types"

const IconsContainer = ({ children, className }: ChildrenAndStyles) => {
    const iconsContainerStyles = tv({ base: 'absolute h-full top-1/2 -translate-y-1/2 right-0 flex gap-1 justify-center z-10' })
    const { dropDownIcon: dropDownIconElement, clearIcon: clearIconElement } = extractStaticChildren(children, [{ component: DropDownIcon }, { component: ClearIcon }])
    const { selectedOptions } = useSelect()

    //@ts-ignore
    const clearStyles = clearIconElement?.props?.className ?? '';
    //@ts-ignore
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
