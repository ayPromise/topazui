import React, { useEffect } from 'react';
import { inputVariants, InputVariantsType } from './styles/Input.variants';
import Icon from './components/Icon';
import Label from './components/Label';
import Error from './components/Error';
import extractStaticChildren from '@/utils/extractStaticChildren';
import InputProvider from './context/InputContext';
import useInputError from './context/useInputError';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariantsType;

const InputComponent: React.FC<InputProps> = ({
    size,
    placeholder,
    name,
    onChange,
    onBlur,
    disabled,
    className,
    children,
    ...props
}) => {
    const { label: labelElement, error: errorElement, icon: iconElement } = extractStaticChildren(children, [Label, Error, Icon]);
    const { error } = useInputError()
    const inputStyles = inputVariants({ size, disabled, error, icon: !!iconElement, className });

    return (
        <div>
            {labelElement}
            <div className='relative'>
                <input
                    onBlur={onBlur}
                    className={inputStyles}
                    placeholder={placeholder}
                    name={name}
                    disabled={disabled}
                    {...props}
                />
                {iconElement}
            </div>
            {errorElement}
        </div>
    );
};

const Input = ({ error = false, ...props }: InputProps) => (
    <InputProvider error={error}>
        <InputComponent {...props} />
    </InputProvider>
);

export default Object.assign(Input, {
    Label: Label,
    Error: Error,
    Icon: Icon
});
