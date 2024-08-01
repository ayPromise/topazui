import { Meta, StoryObj } from '@storybook/react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Input from '.';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
};

export default meta

type Story = StoryObj<typeof Input>

export const Basic: Story = {
    args: {
        type: "text",
        placeholder: "Enter your first name"
    }
};

export const Email: Story = {
    args: {
        type: "email",
        placeholder: "Enter your email",
        readyIconVariant: "outline",
        readyIcon: "email",
        customStyles: {
            iconBackground: "separate"
        }
    }
};

export const Error: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
        value: "qwerty",
        label: "Password",
        error: true,
        errorMessage: "Enter valid password",
        readyIcon: "password",
        customStyles: {
            iconBackground: "separate"
        }
    }
};

export const Custom: Story = {
    args: {
        type: "text",
        placeholder: "Enter book",
        customIcon: <BuildingOfficeIcon width={30} />,
        customStyles: {
            iconBackground: "bg-gray-solid border-black border-r-2",
            inputStyles: "bg-gray-solid"
        }
    }
};
