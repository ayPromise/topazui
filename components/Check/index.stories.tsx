import { Meta, StoryObj } from "@storybook/react"
import Check from "."

const meta: Meta<typeof Check> = {
    title: "Components/Radio",
    component: Check,
    parameters: {
        layout: "centered"
    }
}

export default meta

type Story = StoryObj<typeof Check>

export const DefaultRadio: Story = {
    args: {
        children: <>
            Label
        </>,
        name: "card",
        id: 'card-1'
    }
}

export const DefaultCheckBox: Story = {
    args: {
        children: <>
            <Check.Input type='checkbox' className="checked:bg-blue-solid" />
            Label
        </>,
        name: "card",
        id: 'card-1'
    }
}

export const Custom: Story = {
    args: {
        children: <>
            <Check.Input className="hidden" />
            <Check.Label className="text-black w-48 h-32 border-2 flex flex-col justify-between p-4 peer-checked:border-black hover:bg-gray-100 group">
                <div className="text-[10px]">SMALL</div>
                <div className="font-bold">$10/mo</div>
                <div className="flex flex-col gap-1 text-[11px]">
                    <span>Thing #1</span>
                    <span>Thing #2</span>
                </div>

            </Check.Label>
        </>,
        name: "card",
        id: 'card-2'
    }
}