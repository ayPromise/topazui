import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Toggle, { ToggleProps } from './';

export default {
    title: 'Components/Toggle',
    component: Toggle,
} as Meta;

const AllVariantsTemplate: StoryObj<ToggleProps> = (props: ToggleProps) => {
    const [isToggled, setIsToggled] = useState({
        blue: true,
        red: true,
        yellow: true,
        green: true,
        indigo: true,
        purple: true,
        pink: true,
    });

    const handleToggleChange = (color: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsToggled({ ...isToggled, [color]: e.target.checked });
    };

    return (
        <div className="space-x-4">
            {(['blue', 'red', 'yellow', 'green', 'indigo', 'purple', 'pink'] as const).map((color) => {
                // Destructure `variant` from props to prevent overwriting.
                const { variant, ...rest } = props;

                return (
                    <Toggle
                        key={color}
                        variant={color}
                        checked={isToggled[color]}
                        onChange={handleToggleChange(color)}
                        {...rest}
                    >
                        {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Toggle>
                );
            })}
        </div>
    );
};

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {};
