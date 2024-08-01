import { Meta, StoryObj } from "@storybook/react"
import Radio from "."
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const meta: Meta<typeof Radio> = {
    title: "Components/Radio",
    component: Radio,
    parameters: {
        layout: "centered"
    }
}

export default meta

type Story = StoryObj<typeof Radio>

export const Default: Story = {
    args: {
        name: 'payment',

        options: [
            { title: "Daily", value: "Daily" },
            { title: "Annually", value: "Annually", description: "Not affordable" },
            { title: "None", value: "None" },
        ],

        customStyles: {
            radioButton: "focus:ring-red-solid"
        },

        direction: "column"
    }
}

export const DefaultWithStyles: Story = {
    args: {
        name: 'payment',

        options: [
            { title: "Daily", value: "Daily" },
            { title: "Annually", value: "Annually", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, autem. Odit labore libero cumque! Facilis doloribus incidunt consequuntur maiores et quo ipsam fugit amet." },
            { title: "None", value: "None", disabled: true },
        ],

        customStyles: {
            radioButton: "checked:border-red-solid",
            optionChecked: "peer-checked:bg-red-solid",
        },

        direction: "column"
    }
}

export const Custom: Story = {
    args: {
        name: 'payment',

        options: [
            { title: "Daily", value: "Daily", description: "Good for small websites" },
            { title: "Monthly", value: "Monthly", description: "Good for middle websites" },
            { title: "Annually", value: "Annually", description: "Good for large websites", disabled: true },
        ],
        optionVariant: 'card',
        customStyles: {
            radioButton: "checked:border-red-solid",
            optionChecked: "peer-checked:text-red-solid",
            radioContainer: "w-[1000px]",
            label: "peer-checked:text-green-solid peer-checked:border-green-solid",
            disabled: {
                option: "opacity-30 pointer-events-none"
            }
        },

        direction: "row",
        icon: <ChevronRightIcon width={20} />
    }
}