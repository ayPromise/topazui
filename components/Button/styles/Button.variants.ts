import { tv, VariantProps } from "tailwind-variants";

export const buttonVariants = tv({
  base:'flex px-4 py-2 items-center justify-center rounded cursor-pointer select-none',
  variants: {
    color: {
      blue: '',
      gray: '',
      red: '',
      green: '',
      purple: '',
      orange: '',
      teal: '',
      pink: '',
      indigo: '',
      yellow: '',
    },
    variant: {
      solid: '',
      outline: 'border',
      link: '',
    },
    size: {
      sm: 'w-[120px] h-[30px] text-sm',
      md: 'w-[150px] h-[40px] text-base',
      lg: 'w-[180px] h-[50px] text-lg',
    },
    transition: {
      smooth: 'transition-all duration-500',
      quick: 'transition-all duration-100',
      none: '',
    },
    hoverEffect: {
      scale: 'hover:scale-95',
      none: '',
    },
    clickAnimation: {
      true: 'active:animate-click',
      false: '',
    },
    disabled: {
      true: 'opacity-50 cursor-not-allowed pointer-events-none',
      false: '',
    },
  },
  compoundVariants: [
    { variant: 'solid', color: 'blue', className: 'bg-blue-solid text-blue-text hover:bg-blue-hover' },
    { variant: 'outline', color: 'blue', className: 'border-blue-solid bg-transparent text-blue-solid hover:bg-blue-hover hover:text-blue-text' },
    { variant: 'link', color: 'blue', className: 'bg-transparent text-blue-solid hover:text-blue-hover' },
    
    { variant: 'solid', color: 'gray', className: 'bg-gray-solid text-gray-text hover:bg-gray-hover' },
    { variant: 'outline', color: 'gray', className: 'border-gray-solid bg-transparent text-gray-solid hover:bg-gray-hover hover:text-gray-text' },
    { variant: 'link', color: 'gray', className: 'bg-transparent text-gray-solid hover:text-gray-hover' },
    
    { variant: 'solid', color: 'red', className: 'bg-red-solid text-red-text hover:bg-red-hover' },
    { variant: 'outline', color: 'red', className: 'border-red-solid bg-transparent text-red-solid hover:bg-red-hover hover:text-red-text' },
    { variant: 'link', color: 'red', className: 'bg-transparent text-red-solid hover:text-red-hover' },

    { variant: 'solid', color: 'green', className: 'bg-green-solid text-green-text hover:bg-green-hover' },
    { variant: 'outline', color: 'green', className: 'border-green-solid bg-transparent text-green-solid hover:bg-green-hover hover:text-green-text' },
    { variant: 'link', color: 'green', className: 'bg-transparent text-green-solid hover:text-green-hover' },

    { variant: 'solid', color: 'purple', className: 'bg-purple-solid text-purple-text hover:bg-purple-hover' },
    { variant: 'outline', color: 'purple', className: 'border-purple-solid bg-transparent text-purple-solid hover:bg-purple-hover hover:text-purple-text' },
    { variant: 'link', color: 'purple', className: 'bg-transparent text-purple-solid hover:text-purple-hover' },

    { variant: 'solid', color: 'orange', className: 'bg-orange-solid text-orange-text hover:bg-orange-hover' },
    { variant: 'outline', color: 'orange', className: 'border-orange-solid bg-transparent text-orange-solid hover:bg-orange-hover hover:text-orange-text' },
    { variant: 'link', color: 'orange', className: 'bg-transparent text-orange-solid hover:text-orange-hover' },

    { variant: 'solid', color: 'teal', className: 'bg-teal-solid text-teal-text hover:bg-teal-hover' },
    { variant: 'outline', color: 'teal', className: 'border-teal-solid bg-transparent text-teal-solid hover:bg-teal-hover hover:text-teal-text' },
    { variant: 'link', color: 'teal', className: 'bg-transparent text-teal-solid hover:text-teal-hover' },

    { variant: 'solid', color: 'pink', className: 'bg-pink-solid text-pink-text hover:bg-pink-hover' },
    { variant: 'outline', color: 'pink', className: 'border-pink-solid bg-transparent text-pink-solid hover:bg-pink-hover hover:text-pink-text' },
    { variant: 'link', color: 'pink', className: 'bg-transparent text-pink-solid hover:text-pink-hover' },

    { variant: 'solid', color: 'indigo', className: 'bg-indigo-solid text-indigo-text hover:bg-indigo-hover' },
    { variant: 'outline', color: 'indigo', className: 'border-indigo-solid bg-transparent text-indigo-solid hover:bg-indigo-hover hover:text-indigo-text' },
    { variant: 'link', color: 'indigo', className: 'bg-transparent text-indigo-solid hover:text-indigo-hover' },

    { variant: 'solid', color: 'yellow', className: 'bg-yellow-solid text-yellow-text hover:bg-yellow-hover' },
    { variant: 'outline', color: 'yellow', className: 'border-yellow-solid bg-transparent text-yellow-solid hover:bg-yellow-hover hover:text-yellow-text' },
    { variant: 'link', color: 'yellow', className: 'bg-transparent text-yellow-solid hover:text-yellow-hover' },
  ],
  defaultVariants: {
    variant: 'solid',
    size: 'md',
    color: 'blue',
    transition: 'quick',
    hoverEffect: 'scale',
  },
});

export type ButtonVariantsType = VariantProps<typeof buttonVariants> & {
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
  transition?: 'smooth' | 'quick' | 'none';
  hoverEffect?: 'scale' | 'none';
  clickAnimation?: boolean;
}
