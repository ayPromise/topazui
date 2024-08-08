import { tv, VariantProps } from "tailwind-variants";

const toggleStyles = tv({
        base: "relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all cursor-pointer",
        variants: {
            variant: {
                blue: 'peer-checked:bg-blue-solid peer-focus:ring-blue-300',
                red: 'peer-checked:bg-red-solid peer-focus:ring-red-300',
                yellow: 'peer-checked:bg-yellow-solid peer-focus:ring-yellow-300',
                green: 'peer-checked:bg-green-solid peer-focus:ring-green-300',
                indigo: 'peer-checked:bg-indigo-solid peer-focus:ring-indigo-300',
                purple: 'peer-checked:bg-purple-solid peer-focus:ring-purple-300',
                pink: 'peer-checked:bg-pink-solid peer-focus:ring-pink-300',
            },
            checked: {
                true: 'peer-checked:after:translate-x-[calc(100%-0.05rem)] rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white ',
                false: ''
            },

            size: {
                sm: 'w-9 h-5 after:top-[2px] after:start-[3px] after:h-4 after:w-4',
                md: 'w-11 h-6 after:top-[2px] after:start-[3px] after:h-5 after:w-5',
                lg: 'w-14 h-7 after:top-[2px] after:start-[4px] after:h-6 after:w-6',
            },
        },
    })

    export type ToggleVariants = VariantProps<typeof toggleStyles> &  {
    variant: 'blue' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink'
    size?: 'sm' | 'md' | 'lg'
}

    export default toggleStyles;