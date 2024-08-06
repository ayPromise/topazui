import { createContext, PropsWithChildren, SetStateAction, useState } from "react";
import { OptionType } from "../types";


type SelectContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<SetStateAction<boolean>>;
    selectedOptions: OptionType[];
    setSelectedOptions: (options: OptionType[]) => void;
    searchText: string;
    setSearchText: React.Dispatch<SetStateAction<string>>

    isMultiple: boolean;
    error: boolean;
    isList: boolean;
    withInput: boolean;
}

export const SelectContext = createContext<SelectContextType | null>(null)

type SelectProviderType = {
    children: React.ReactNode;
    multiple: boolean;
    error: boolean;
    isList: boolean;
    withInput: boolean;
    onChange?: (options: OptionType[]) => void
}

const SelectProvider: React.FC<SelectProviderType> = ({ children, onChange, multiple, error, isList, withInput }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([])
    const [searchText, setSearchText] = useState<string>('')

    const handleSetSelectedOptions = (options: OptionType[]) => {
        setSelectedOptions(options)
        onChange && onChange(options)
    }

    const values: SelectContextType = {
        isOpen,
        setIsOpen,
        selectedOptions,
        setSelectedOptions: handleSetSelectedOptions,
        searchText,
        setSearchText,
        isMultiple: multiple,
        error,
        isList,
        withInput
    }

    return <SelectContext.Provider value={values}>
        {children}
    </SelectContext.Provider>
}

export default SelectProvider