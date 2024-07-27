import { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ["autodoc"]
};

export default meta

type Story = StoryObj<typeof Button>


export const Solid: Story = {
    args: {
        variant: 'solid',
        color: 'blue',
        size: 'md',
        children: "Button"
    }
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        color: 'blue',
        size: 'md',
        children: "Button"
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

export const Loading: Story = {
    args: {
        variant: 'solid',
        color: 'blue',
        size: 'md',
        children: "Button",
        loading: true
    }
};

export const Custom: Story = {
    args: {
        children: "Custom text",
        customStyles: "bg-teal-200 hover:bg-red-500 disabled:bg-gray-500",
        loadingText: "Custom text",
        customLoader: <div className='w-3 h-3 animate-spin bg-black'></div>
    }
};
