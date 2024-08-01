import React from 'react';
import clsx from 'clsx';
import Icon from './Icon';
import { InputCustomStyles } from './types';

export type InputProps = {
    type?: 'text' | 'password' | 'email' | 'number';
    size?: 'sm' | 'md' | 'lg';
    placeholder?: string;
    value?: string;
    name?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    label?: string;
    customIcon?: React.ReactNode;
    readyIcon?: 'username' | 'email' | 'password' | 'none';
    readyIconVariant?: 'solid' | 'outline';
    iconBackgroundVariant?: 'separate' | 'flat';
    error?: boolean;
    errorMessage?: string;
    fullWidth?: boolean;
    customStyles?: InputCustomStyles;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({
    type = 'text',
    size = 'md',
    placeholder = '',
    value = '',
    name = '',
    onChange,
    onBlur,
    disabled = false,
    label = '',
    customIcon,
    readyIcon = 'none',
    readyIconVariant = 'outline',
    iconBackgroundVariant = 'flat',
    error = false,
    errorMessage = '',
    fullWidth = false,
    customStyles,
    ...props
}) => {
    const baseStyles = 'rounded border-gray-solid border-2 p-2 focus:outline-none';

    const sizeStyles = {
        sm: 'w-[250px] text-sm py-1 px-2',
        md: 'w-[300px] text-base py-2 px-3',
        lg: 'w-[400px] text-lg py-3 px-4',
    };

    const errorStyles = 'border-red-solid text-red-solid';
    const disabledStyles = 'opacity-50 cursor-not-allowed'
    const withIconStyles = 'pl-[55px]'
    const inputStyles = clsx(
        baseStyles,
        sizeStyles[size as keyof typeof sizeStyles],
        {
            [errorStyles]: error,
            [disabledStyles]: disabled,
            [withIconStyles]: readyIcon !== "none" || customIcon,
            "w-full": fullWidth
        },
        customStyles?.inputStyles
    );

    const labelStyles = clsx(
        'ml-[2px]',
        {
            "text-red-solid": error
        }
    )

    return (
        <div>
            {label && <label className={labelStyles} htmlFor={name}>{label}</label>}
            <div className='relative '>
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    disabled={disabled}
                    className={inputStyles}
                    {...props}
                />
                <Icon iconVariant={readyIconVariant} icon={readyIcon} isError={error} customIcon={customIcon} backgroundStyle={customStyles?.iconBackground || iconBackgroundVariant} />
            </div>
            {error && errorMessage &&
                <span className="mt-1 text-sm text-red-solid">{errorMessage}</span>
            }
        </div>
    );
};

export default Input;
