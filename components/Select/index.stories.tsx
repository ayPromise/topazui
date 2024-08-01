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

export const ErrorHandlingDefault: Story = {
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
        ],
        isError: true,
        errorMessage: "Choose at least one element",
    }
}


export const ErrorHandlingCustom: Story = {
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
        ],
        isError: true,
        errorMessage: "Choose at least one element",
        customStyles: {
            errorMessage: "text-orange-solid",
            selectError: "border-4"
        }
    }
}