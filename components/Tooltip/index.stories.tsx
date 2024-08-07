import { Meta, StoryObj } from "@storybook/react"
import Tooltip from "./"
import Button from "../Button"

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered"
    }
}


export default meta

type Story = StoryObj<typeof Tooltip>

export const TopStart: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'top-start',
        message: 'Additional info'
    },
};

export const Top: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'top',
        message: 'Additional info'
    },
};

export const TopEndClick: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'click',
        placement: 'top-end',
        message: 'Additional info'
    },
};

export const RightStart: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'right-start',
        message: 'Additional info'
    },
};

export const Right: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'right',
        message: 'Additional info'
    },
};

export const RightEnd: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'right-end',
        message: 'Additional info'
    },
};

export const BottomStart: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'bottom-start',
        message: 'Additional info'
    },
};

export const Bottom: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'bottom',
        message: 'Additional info'
    },
};

export const BottomEnd: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'bottom-end',
        message: 'Additional info'
    },
};

export const LeftStart: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'left-start',
        message: 'Additional info'
    },
};

export const Left: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'left',
        message: 'Additional info'
    },
};

export const LeftEnd: Story = {
    args: {
        children: <Button hoverEffect="none">Hover me</Button>,
        showBy: 'hover',
        placement: 'left-end',
        message: 'Additional info'
    },
};