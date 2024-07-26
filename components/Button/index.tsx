// components/Button/index.tsx
import React from 'react';
import clsx from 'clsx';
import Loader from './Loader';

export type ButtonProps = {
  variant?: 'solid' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'red' | 'green' | 'purple' | 'orange' | 'teal' | 'pink' | 'indigo' | 'yellow';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  customLoader?: React.ReactNode;
  fullWidth?: boolean;
  customStyles?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  variant = 'solid',
  size = 'md',
  color = 'blue',
  disabled = false,
  loading = false,
  loadingText = "Submiting",
  customLoader = null,
  fullWidth = false,
  customStyles,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded focus:outline-none';

  const colorScheme = {
    blue: {
      solid: 'bg-blue-solid text-blue-text hover:bg-blue-hover',
      outline: 'border border-blue-solid text-blue-solid hover:bg-blue-hover',
      link: 'text-blue-solid hover:text-blue-hover',
    },
    gray: {
      solid: 'bg-gray-solid text-gray-text hover:bg-gray-hover',
      outline: 'border border-gray-solid text-gray-solid hover:bg-gray-hover',
      link: 'text-gray-solid hover:text-gray-hover',
    },
    red: {
      solid: 'bg-red-solid text-red-text hover:bg-red-hover',
      outline: 'border border-red-solid text-red-solid hover:bg-red-hover',
      link: 'text-red-solid hover:text-red-hover',
    },
    green: {
      solid: 'bg-green-solid text-green-text hover:bg-green-hover',
      outline: 'border border-green-solid text-green-solid hover:bg-green-hover',
      link: 'text-green-solid hover:text-green-hover',
    },
    purple: {
      solid: 'bg-purple-solid text-purple-text hover:bg-purple-hover',
      outline: 'border border-purple-solid text-purple-solid hover:bg-purple-hover',
      link: 'text-purple-solid hover:text-purple-hover',
    },
    orange: {
      solid: 'bg-orange-solid text-orange-text hover:bg-orange-hover',
      outline: 'border border-orange-solid text-orange-solid hover:bg-orange-hover',
      link: 'text-orange-solid hover:text-orange-hover',
    },
    teal: {
      solid: 'bg-teal-solid text-teal-text hover:bg-teal-hover',
      outline: 'border border-teal-solid text-teal-solid hover:bg-teal-hover',
      link: 'text-teal-solid hover:text-teal-hover',
    },
    pink: {
      solid: 'bg-pink-solid text-pink-text hover:bg-pink-hover',
      outline: 'border border-pink-solid text-pink-solid hover:bg-pink-hover',
      link: 'text-pink-solid hover:text-pink-hover',
    },
    indigo: {
      solid: 'bg-indigo-solid text-indigo-text hover:bg-indigo-hover',
      outline: 'border border-indigo-solid text-indigo-solid hover:bg-indigo-hover',
      link: 'text-indigo-solid hover:text-indigo-hover',
    },
    yellow: {
      solid: 'bg-yellow-solid text-yellow-text hover:bg-yellow-hover',
      outline: 'border border-yellow-solid text-yellow-solid hover:bg-yellow-hover',
      link: 'text-yellow-solid hover:text-yellow-hover',
    },
  };

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const buttonStyles = clsx(
    baseStyles,
    colorScheme[color][variant],
    sizeStyles[size],
    {
      'opacity-50 cursor-not-allowed': disabled || loading,
      'w-full': fullWidth
    },
    customStyles
  );

  return (
    <button
      className={buttonStyles}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <div className='flex justify-center items-center gap-2'>
        {customLoader || <Loader color={color}></Loader>}
        {loadingText}
      </div> : children}
    </button>
  );
};

export default Button;
