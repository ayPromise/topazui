import React, { ComponentProps, ElementType } from 'react';
import clsx from 'clsx';
import Loader from './components/Loader';
import { buttonVariants, ButtonVariants } from './styles/Button.variants';

export type ButtonCustomProps<E extends ElementType = ElementType> = {
  loading?: boolean;
  sideOfLoader?: 'left' | 'centerAlone' | 'right';
  loadingText?: string;
  customLoader?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  as?: E;
} & ButtonVariants & {
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
  transition?: 'smooth' | 'quick' | 'none';
  hoverEffect?: 'scale' | 'none';
  clickAnimation?: boolean;
};

interface ButtonWithForwardRef extends React.FC<ButtonCustomProps<ElementType>> {
  <E extends ElementType>(props: ButtonCustomProps<E> & { ref?: React.Ref<any> }): ReturnType<React.FC<ButtonCustomProps<E>>>
}

type ButtonProps<E extends ElementType> = ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>


const defaultElementType: ElementType = "button"

const Button: ButtonWithForwardRef = <E extends ElementType = typeof defaultElementType>({
  variant = 'solid',
  size = 'md',
  color = 'blue',
  transition = 'quick',
  hoverEffect = 'scale',
  clickAnimation = true,
  disabled = false,
  loading = false,
  sideOfLoader = "left",
  loadingText = "Submiting",
  customLoader = null,
  fullWidth = false,
  className,
  children,
  as: Component = defaultElementType as E,
  ...otherProps
}: ButtonProps<E>) => {
  const buttonStyles = buttonVariants({ variant: variant, size: size, color: color, transition: transition, hoverEffect: hoverEffect, clickAnimation: clickAnimation, disabled: disabled || loading })


  const defaultLoaderColor = "border" + buttonStyles.split(" ").find(part => part.startsWith("text-") && part !== "text-base")?.slice(4)
  const loaderElement = (
    <div className={clsx("flex justify-between items-center gap-2", {
      "flex-row-reverse": sideOfLoader === "right"
    })}>
      {customLoader || <Loader color={defaultLoaderColor} />}
      {sideOfLoader !== "centerAlone" && loadingText}
    </div>
  );

  return (
    //@ts-ignore
    <Component className={`${buttonStyles} ${className}`} {...otherProps}>
      {loading ? loaderElement : children}
    </Component>
  );
};

export default Button;
