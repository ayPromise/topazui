import { Meta, StoryObj } from "@storybook/react"
import Spinner from "."

const meta: Meta<typeof Spinner> = {
    title: "Components/Spinner",
    component: Spinner
}

export default meta

type Story = StoryObj<typeof Spinner>

export const Default: Story = {
    args: {

    }
}


export const Custom: Story = {
    args: {
        backgroundColor: 'gray',
        indicatorColor: 'green'
    }
} 