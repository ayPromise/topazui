import { cva, VariantProps } from "class-variance-authority";
import styles from "./Button.module.css"

export const buttonVariants = cva(
  styles.base,
  {
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
        sm: styles.sizeSm,
        md: styles.sizeMd,
        lg: styles.sizeLg,
      },
      transition: {
        smooth: styles.transitionSmooth,
        quick: styles.transitionQuick,
        none: '',
      },
      hoverEffect: {
        scale: styles.hoverScale,
        none: '',
      },
      clickAnimation:{
        true:styles.clickAnimation,
        false:""
      },
      disabled:{
        true:styles.disabled,
        false:""
      }
    },
    compoundVariants: [
        { variant: 'solid', color: 'blue', className: styles.SolidBlue },
        { variant: 'outline', color: 'blue', className: styles.OutlineBlue },
        { variant: 'link', color: 'blue', className: styles.LinkBlue },
        
        { variant: 'solid', color: 'gray', className: styles.SolidGray },
        { variant: 'outline', color: 'gray', className: styles.OutlineGray },
        { variant: 'link', color: 'gray', className: styles.LinkGray },

        { variant: 'solid', color: 'red', className: styles.SolidRed },
        { variant: 'outline', color: 'red', className: styles.OutlineRed },
        { variant: 'link', color: 'red', className: styles.LinkRed },

        { variant: 'solid', color: 'green', className: styles.SolidGreen },
        { variant: 'outline', color: 'green', className: styles.OutlineGreen },
        { variant: 'link', color: 'green', className: styles.LinkGreen },

        { variant: 'solid', color: 'purple', className: styles.SolidPurple },
        { variant: 'outline', color: 'purple', className: styles.OutlinePurple },
        { variant: 'link', color: 'purple', className: styles.LinkPurple },

        { variant: 'solid', color: 'orange', className: styles.SolidOrange },
        { variant: 'outline', color: 'orange', className: styles.OutlineOrange },
        { variant: 'link', color: 'orange', className: styles.LinkOrange },

        { variant: 'solid', color: 'teal', className: styles.SolidTeal },
        { variant: 'outline', color: 'teal', className: styles.OutlineTeal },
        { variant: 'link', color: 'teal', className: styles.LinkTeal },

        { variant: 'solid', color: 'pink', className: styles.SolidPink },
        { variant: 'outline', color: 'pink', className: styles.OutlinePink },
        { variant: 'link', color: 'pink', className: styles.LinkPink },

        { variant: 'solid', color: 'indigo', className: styles.SolidIndigo },
        { variant: 'outline', color: 'indigo', className: styles.OutlineIndigo },
        { variant: 'link', color: 'indigo', className: styles.LinkIndigo },

        { variant: 'solid', color: 'yellow', className: styles.SolidYellow },
        { variant: 'outline', color: 'yellow', className: styles.OutlineYellow },
        { variant: 'link', color: 'yellow', className: styles.LinkYellow },],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      color: 'blue',
      transition: 'quick',
      hoverEffect: 'scale',
    },
  }
);

export type ButtonVariantsType = VariantProps<typeof buttonVariants> & {
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
  transition?: 'smooth' | 'quick' | 'none';
  hoverEffect?: 'scale' | 'none';
  clickAnimation?: boolean;
}