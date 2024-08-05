import { tv, VariantProps } from "tailwind-variants";

export const iconVariants = tv({
    base:'absolute top-[50%] translate-y-[-50%] w-[45px] h-full rounded-l flex justify-center items-center text-[10px]',
    variants:{
        backgroundVariant:{
            separate:'border-gray-solid border-r-2 peer-invalid:border-red-500',
            flat:''
        },
        error:{
            true:'border-red-solid text-red-solid',
            false:''
        }
    },
    compoundVariants:[
        {
        }
    ],
    defaultVariants:{
        backgroundVariant:'separate',
        error:false
    }
})

export type IconVariantsType = VariantProps<typeof iconVariants> & {
    backgroundVariant?: 'separate'|'flat';
    error?: boolean;
}