import React from 'react';
import clsx from 'clsx';
import Loader from './Loader';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | 'menu'
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
  transition?: 'smooth' | 'quick' | 'none';
  hoverEffect?: 'scale' | 'none';
  clickAnimation?: boolean;
  disabled?: boolean;
  loading?: boolean;
  sideOfLoader?: 'left' | 'centerAlone' | 'right';
  loadingText?: string;
  customLoader?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: Function;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  type = 'button',
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
  ...props
}) => {
  const baseStyles = 'flex px-4 py-2 items-center justify-center rounded';

  const colorScheme = {
    blue: {
      solid: 'bg-blue-solid text-blue-text hover:bg-blue-hover',
      outline: 'border border-blue-solid text-blue-solid hover:bg-blue-hover hover:text-blue-text',
      link: 'text-blue-solid hover:text-blue-hover',
    },
    gray: {
      solid: 'bg-gray-solid text-gray-text hover:bg-gray-hover',
      outline: 'border border-gray-solid text-gray-solid hover:bg-gray-hover hover:text-gray-text',
      link: 'text-gray-solid hover:text-gray-hover',
    },
    red: {
      solid: 'bg-red-solid text-red-text hover:bg-red-hover',
      outline: 'border border-red-solid text-red-solid hover:bg-red-hover hover:text-red-text',
      link: 'text-red-solid hover:text-red-hover',
    },
    green: {
      solid: 'bg-green-solid text-green-text hover:bg-green-hover',
      outline: 'border border-green-solid text-green-solid hover:bg-green-hover hover:text-green-text',
      link: 'text-green-solid hover:text-green-hover',
    },
    purple: {
      solid: 'bg-purple-solid text-purple-text hover:bg-purple-hover',
      outline: 'border border-purple-solid text-purple-solid hover:bg-purple-hover hover:text-purple-text',
      link: 'text-purple-solid hover:text-purple-hover',
    },
    orange: {
      solid: 'bg-orange-solid text-orange-text hover:bg-orange-hover',
      outline: 'border border-orange-solid text-orange-solid hover:bg-orange-hover hover:text-orange-text',
      link: 'text-orange-solid hover:text-orange-hover',
    },
    teal: {
      solid: 'bg-teal-solid text-teal-text hover:bg-teal-hover',
      outline: 'border border-teal-solid text-teal-solid hover:bg-teal-hover hover:text-teal-text',
      link: 'text-teal-solid hover:text-teal-hover',
    },
    pink: {
      solid: 'bg-pink-solid text-pink-text hover:bg-pink-hover',
      outline: 'border border-pink-solid text-pink-solid hover:bg-pink-hover hover:text-pink-text',
      link: 'text-pink-solid hover:text-pink-hover',
    },
    indigo: {
      solid: 'bg-indigo-solid text-indigo-text hover:bg-indigo-hover',
      outline: 'border border-indigo-solid text-indigo-solid hover:bg-indigo-hover hover:text-indigo-text',
      link: 'text-indigo-solid hover:text-indigo-hover',
    },
    yellow: {
      solid: 'bg-yellow-solid text-yellow-text hover:bg-yellow-hover',
      outline: 'border border-yellow-solid text-yellow-solid hover:bg-yellow-hover hover:text-yellow-text',
      link: 'text-yellow-solid hover:text-yellow-hover',
    },
  };



  const sizeStyles = {
    sm: 'w-[120px] h-[30px] text-sm',
    md: 'w-[150px] h-[40px] text-base',
    lg: 'w-[180px] h-[50px] text-lg',
  };

  const transitionStyles = {
    smooth: "transition-all duration-500",
    quick: "transition-all duration-100",
    none: ""
  }

  const hoverEffectStyles = {
    scale: "hover:scale-95",
    none: ""
  }

  const animationStyles = 'active:animate-click'
  const disabledStyles = 'opacity-50 cursor-not-allowed hover pointer-events-none'

  const buttonStyles = clsx(
    baseStyles,
    colorScheme[color][variant],
    sizeStyles[size as keyof typeof sizeStyles],
    transitionStyles[transition as keyof typeof transitionStyles],
    hoverEffectStyles[hoverEffect as keyof typeof hoverEffectStyles],
    {
      [animationStyles]: clickAnimation,
      [disabledStyles]: disabled || loading,
      'w-full': fullWidth
    },
    className
  );

  const deafultLoaderColor = "border" + buttonStyles.split(" ").find(part => part.startsWith("text-") && part !== "text-base")?.slice(4)

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <div className={clsx("flex justify-between items-center gap-2", {
        "flex-row-reverse": sideOfLoader === "right"
      })}>
        {customLoader || <Loader color={deafultLoaderColor}></Loader>}
        {sideOfLoader !== "centerAlone" && loadingText}
      </div> : children}
    </button>
  );
};

export default Button;
