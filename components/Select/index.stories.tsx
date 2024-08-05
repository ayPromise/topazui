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
        </>
    }
}

export const Custom: Story = {
    args: {
        children: <>
            <Select.Button className="bg-green-300 border-0"></Select.Button>

            <Select.IconsContainer className="bg-green-solid">
                <Select.IconsContainer.DropDownIcon className="bg-red-solid">
                    <ChevronDoubleDownIcon width={18}></ChevronDoubleDownIcon>
                </Select.IconsContainer.DropDownIcon>
            </Select.IconsContainer>

            <Select.Menu>
                <Select.Option value={"first"}>First Item</Select.Option>
                <Select.Option value={"second"}>Second Item</Select.Option>
            </Select.Menu>

            <Select.NoOptionMessage className="text-orange-400">Fuck</Select.NoOptionMessage>
        </>,

        error: false
    }
}