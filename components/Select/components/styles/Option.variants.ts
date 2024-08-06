import StylesProps from "@/types/StylesProps"
import { tv, VariantProps } from "tailwind-variants"

export const optionMenuVariants =
    tv({
    base:'bg-white hover:bg-gray-200 cursor-pointer p-2 select-none transition-all',
    variants:{
        disabled: { true: 'opacity-50 pointer-events-none' },
        selected: { true: 'bg-gray-400'}
    },
    compoundVariants:[],
    defaultVariants:{

    }
})


export const optionListVariants = tv({
    base:'bg-transparent border-2 border-blue-solid rounded cursor-pointer px-3 py-1 select-none transition-all',
    variants:{
        disabled: { true: 'opacity-50 pointer-events-none'},
        selected: {true:'bg-blue-solid text-blue-text'}
    },
    compoundVariants:[],
    defaultVariants:{
        
    }
})

export type OptionVariants = VariantProps<typeof optionListVariants> & VariantProps<typeof optionMenuVariants>