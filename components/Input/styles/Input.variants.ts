import { tv, VariantProps } from "tailwind-variants";

export const inputVariants = tv({
    base:'rounded border-gray-solid border-2 py-2 focus:outline-none peer',
    variants:{
        size:{
            sm: 'w-[250px] text-sm py-1 pr-2',
            md: 'w-[300px] text-base py-2 pr-3',
            lg: 'w-[400px] text-lg py-3 pr-4',
        },
        error:{
            true:'border-red-solid text-red-solid',
            false:''
        },
        disabled:{
            true:'opacity-50 cursor-not-allowed',
            false:''
        },
        icon:{
            true:'pl-[50px]',
            false:'px-2'
        }

    },
    defaultVariants:{
        size: 'md',
        disabled:false,
        error:false,
        icon:false
    }
})

export type InputVariantsType = VariantProps<typeof inputVariants> & {
        size?: 'sm' | 'md' | 'lg';
        error?: boolean;
        disabled?: boolean;
        icon?:boolean;
} 