import React, { ComponentProps, ElementType } from 'react';
import { buttonVariants, ButtonVariantsType } from './styles/Button.variants';

export type ButtonCustomProps<E extends ElementType = ElementType> = {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  as?: E;
} & ButtonVariantsType;

interface ButtonWithForwardRef extends React.FC<ButtonCustomProps<ElementType>> {
  <E extends ElementType>(props: ButtonCustomProps<E> & { ref?: React.Ref<any> }): ReturnType<React.FC<ButtonCustomProps<E>>>
}

type ButtonProps<E extends ElementType> = ButtonCustomProps<E> & Omit<ComponentProps<E>, keyof ButtonCustomProps>;


const defaultElementType: ElementType = "button"

const Button: ButtonWithForwardRef = <E extends ElementType = typeof defaultElementType>({
  variant,
  size,
  color,
  transition,
  hoverEffect,
  clickAnimation,
  disabled,
  className = "",
  children,
  as: Component = defaultElementType as E,
  ...otherProps
}: ButtonProps<E>) => {

  const buttonStyles = buttonVariants({ variant, size, color, transition, hoverEffect, clickAnimation, disabled, className })

  return (
    //@ts-ignore
    <Component className={buttonStyles} {...otherProps}>
      {children}
    </Component>
  );
};

export default Button;
