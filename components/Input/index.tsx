import React, { useEffect } from 'react';
import { inputVariants, InputVariantsType } from './styles/Input.variants';
import Icon from './components/Icon';
import Error from './components/Error';
import extractStaticChildren from '@/utils/extractStaticChildren';
import InputProvider from './context/InputContext';
import useInputError from './context/useInputError';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & InputVariantsType;

const InputComponent: React.FC<InputProps> = ({
    size,
    name,
    disabled,
    className,
    children,
    ...props
}) => {
    const { error: errorElement, icon: iconElement } = extractStaticChildren(children, [{ component: Error }, { component: Icon }]);
    const { error } = useInputError()
    const inputStyles = inputVariants({ size, disabled, error, icon: !!iconElement, className });

    return (
        <>
            <div className='relative'>
                <input
                    className={inputStyles}
                    id={name}
                    disabled={disabled}
                    {...props}
                />
                {iconElement}
            </div>
            {errorElement}
        </>
    );
};

const Input = ({ error = false, ...props }: InputProps) => (
    <InputProvider error={error}>
        <InputComponent {...props} />
    </InputProvider>
);

export default Object.assign(Input, {
    Error: Error,
    Icon: Icon
});
