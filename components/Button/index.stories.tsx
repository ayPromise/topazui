import { Meta, StoryObj } from '@storybook/react';
import Button from './index';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
};

export default meta

type Story = StoryObj<typeof Button>


export const Solid: Story = {
    args: {
        variant: 'solid',
        color: "pink",
        size: 'md',
        children: "Button",
    }
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        color: 'blue',
        size: 'md',
        children: "Button",
    }
};

export const Link: Story = {
    args: {
        variant: 'link',
        color: 'blue',
        size: 'md',
        children: "Button",
        hoverEffect: "none",
        transition: "quick"
    }
};

export const Disabled: Story = {
    args: {
        variant: 'solid',
        color: 'blue',
        size: 'md',
        children: "Button",
        disabled: true
    }
};


export const Custom: Story = {
    args: {
        children: "Custom text",
        className: "bg-teal-200 hover:bg-red-500 disabled:bg-gray-500",
        onClick: action("button-clicked"),
    }
};
