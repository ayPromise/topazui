import { Meta, StoryObj } from "@storybook/react"
import Label from "."

const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
    parameters: {
        layout: "centered"
    }
}

export default meta


type Story = StoryObj<typeof Label>

export const Default: Story = {
    args: {
        children: "Password"
    }
}

export const Error: Story = {
    args: {
        children: "Password",
        className: "text-red-solid"
    }
}