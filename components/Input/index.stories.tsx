import { Meta, StoryObj } from '@storybook/react';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import Input from '.';
import { BuildingLibraryIcon } from '@heroicons/react/24/solid';

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
        children: <Input.Icon icon='email' iconVariant='outline'></Input.Icon>
    }
};

export const Error: Story = {
    args: {
        type: "password",
        placeholder: "Enter password",
        error: true,
        id: "password",
        children: <>
            <Input.Icon icon="email" iconVariant='solid' />
            <Input.Error>Invalid password</Input.Error>
        </>
    }
};

export const Custom: Story = {
    args: {
        type: "text",
        placeholder: "Enter book",
        name: "book",

        children: <>
            <Input.Error >Wrong password</Input.Error>
            <Input.Icon>
                <BuildingLibraryIcon width={20} />
            </Input.Icon>
        </>,
    }
};
