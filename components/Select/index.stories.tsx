import { Meta, StoryObj } from "@storybook/react"
import Select from "."

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
    tags: ["autodesc"],
    parameters: {
        layout: "centered"
    }
}

export default meta

type Story = StoryObj<typeof Select>


export const DefaultSingle: Story = {
    args: {
        label: "Your gender",
        options: [
            {
                title: "male",
                value: "first"
            },
            {
                title: "female",
                value: "second"
            },
            {
                title: "hexocopter",
                value: "third",
                isDisabled: true
            }
        ]
    }
}

export const DefaultMulti: Story = {
    args: {
        label: "Your gender",
        isMulti: true,
        options: [
            {
                title: "male",
                value: "first"
            },
            {
                title: "female",
                value: "second"
            },
            {
                title: "hexocopter",
                value: "third",
                isDisabled: true
            },
            {
                title: "punk",
                value: "punk"
            },
            {
                title: "car",
                value: "car"
            }
        ]
    }
}