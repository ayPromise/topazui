import { createContext, PropsWithChildren, SetStateAction, useState } from "react";
import { OptionType } from "../types";


type SelectContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    selectedOptions: OptionType[];
    setSelectedOptions: React.Dispatch<SetStateAction<OptionType[]>>;
    isMultiple: boolean;
    error: boolean;
}

export const SelectContext = createContext<SelectContextType | null>(null)

type SelectProviderType = {
    children: React.ReactNode;
    multiple: boolean;
    error: boolean
}

const SelectProvider: React.FC<SelectProviderType> = ({ children, multiple, error }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([])
    const values: SelectContextType = {
        isOpen,
        setIsOpen,
        selectedOptions,
        setSelectedOptions,
        isMultiple: multiple,
        error
    }

    return <SelectContext.Provider value={values}>
        {children}
    </SelectContext.Provider>
}

export default SelectProvider