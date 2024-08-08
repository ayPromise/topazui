import { Meta, StoryObj } from '@storybook/react';
import Badge from './index';

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
};

export default meta

type Story = StoryObj<typeof Badge>


export const Default: Story = {
    args: {
        children: <>Badge</>,
        variant: 'default'
    }
}

export const Red: Story = {
    args: {
        children: <>Badge</>,
        variant: 'red'
    }
}


export const Yellow: Story = {
    args: {
        children: <>Badge</>,
        variant: 'yellow'
    }
}


export const Green: Story = {
    args: {
        children: <>Badge</>,
        variant: 'green'
    }
}


export const Blue: Story = {
    args: {
        children: <>Badge</>,
        variant: 'blue'
    }
}


export const Indigo: Story = {
    args: {
        children: <>Badge</>,
        variant: 'indigo'
    }
}

export const Purple: Story = {
    args: {
        children: <>Badge</>,
        variant: 'purple'
    }
}

export const Pink: Story = {
    args: {
        children: <>Badge</>,
        variant: 'pink'
    }
}

