import { Meta, StoryObj } from "@storybook/react"
import TextLink from "."


const meta: Meta<typeof TextLink> = {
    title: "Components/TextLink",
    component: TextLink,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
}

export default meta

type Story = StoryObj<typeof TextLink>

export const Default: Story = {
    args: {
        children: 'get started',
        htmlFor: ''
    }
}
