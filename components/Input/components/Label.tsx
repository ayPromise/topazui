import React, { LabelHTMLAttributes } from 'react'
import { tv } from 'tailwind-variants';
import useInputError from '../context/useInputError';

type StyleProps = {
    baseStyles?: string;
    errorStyles?: string;
}

type LabelCustomProps = {
    children: React.ReactNode;
    styles?: StyleProps;
}

type LabelProps = LabelCustomProps & Omit<LabelHTMLAttributes<HTMLLabelElement>, keyof LabelCustomProps>

const Label: React.FC<LabelProps> = ({ styles, className, ...props }) => {
    const { error } = useInputError()

    const labelStyles = tv(
        {
            base: styles?.baseStyles || 'font-bold',
            variants: {
                error: {
                    true: styles?.errorStyles || 'ml-[2px] text-red-solid',
                    false: ''
                }
            }
        }
    )
    return <label className={labelStyles({ error, className })} {...props} />
}

Label.displayName = 'label'

export default Label