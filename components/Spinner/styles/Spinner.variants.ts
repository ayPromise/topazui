import { tv,VariantProps } from "tailwind-variants";

    const spinnerVariants = tv({
        base: 'animate-spin',
        variants: {
            size: {
                sm: 'size-4',
                md: 'size-8',
                lg: 'size-14'
            },
            alignment: {
                left: 'text-left',
                center: 'text-center',
                right: 'text-right'
            },
            backgroundColor: {
                blue: 'text-blue-200',
                gray: 'text-gray-200',
                red: 'text-red-200',
                green: 'text-green-200',
                purple: 'text-purple-200',
                orange: 'text-orange-200',
                teal: 'text-teal-200',
                pink: 'text-pink-200',
                indigo: 'text-indigo-200',
                yellow: 'text-yellow-200'
            },

            indicatorColor: {
                blue: 'fill-blue-solid',
                gray: 'fill-gray-solid',
                red: 'fill-red-solid',
                green: 'fill-green-solid',
                purple: 'fill-purple-solid',
                orange: 'fill-orange-solid',
                teal: 'fill-teal-solid',
                pink: 'fill-pink-solid',
                indigo: 'fill-indigo-solid',
                yellow: 'fill-yellow-solid'
            }
        },

        defaultVariants: {
            size: 'md',
            indicatorColor: 'blue',
            backgroundColor: 'gray',
            alignment: 'center'
        }

    });

    export type SpinnerVariantsType = VariantProps<typeof spinnerVariants> & {
        size?: 'sm' | 'md' | 'lg'
        alignment?: 'left' | 'center' | 'right',
        backgroundColor?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
        indicatorColor?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
    }

    export default spinnerVariants