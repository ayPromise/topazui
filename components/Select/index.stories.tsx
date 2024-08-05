import { Meta, StoryObj } from "@storybook/react"
import Select from "."
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"

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


export const Default: Story = {
    args: {
        children: <>
            <Select.Menu>
                <Select.Option value={"first"}>First Item</Select.Option>
                <Select.Option value={"second"}>Second Item</Select.Option>
            </Select.Menu>
            <Select.NoOptionMessage>Fuck</Select.NoOptionMessage>
        </>,

        error: false
    }
}

export const Custom: Story = {
    args: {
        children: <>
            <Select.Button className="rounded bg-gray-500 text-gray-text border-2 border-gray-300">

                <Select.IconsContainer className="text-black h-full">
                    <Select.IconsContainer.DropDownIcon className="bg-gray-200 w-[30px]">
                        <ChevronDoubleDownIcon width={18} />
                    </Select.IconsContainer.DropDownIcon>
                    <Select.IconsContainer.ClearIcon className="text-white" />
                </Select.IconsContainer>

            </Select.Button>

            <Select.Menu className="rounded bg-slate-200 space-y-[2px] text-white">
                <Select.Option value={"first"} className="bg-gray-500 hover:text-gray-500">First Item</Select.Option>
                <Select.Option value={"second"} className="bg-gray-500 hover:text-gray-500">Second Item</Select.Option>
            </Select.Menu>

            <Select.NoOptionMessage className="text-orange-400">Fuck</Select.NoOptionMessage>
        </>,

        error: false
    }
}