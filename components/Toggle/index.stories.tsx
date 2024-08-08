import { Meta, StoryObj } from "@storybook/react"
import Toggle from "."


const meta: Meta<typeof Toggle> = {
    title: "Components/Toggle",
    component: Toggle,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
}

export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
    args: {
        children: "Toggle me",
        id: 'toggle'
    }
}

export const Red: Story = {
    args: {
        children: "Toggle me",
        variant: 'red'
    }
}


export const Yellow: Story = {
    args: {
        children: "Toggle me",
        variant: 'yellow'
    }
}


export const Green: Story = {
    args: {
        children: "Toggle me",
        variant: 'green'
    }
}


export const Blue: Story = {
    args: {
        children: "Toggle me",
        variant: 'blue'
    }
}


export const Indigo: Story = {
    args: {
        children: "Toggle me",
        variant: 'indigo'
    }
}

export const Purple: Story = {
    args: {
        children: "Toggle me",
        variant: 'purple'
    }
}

export const Pink: Story = {
    args: {
        children: "Toggle me",
        variant: 'pink'
    }
}