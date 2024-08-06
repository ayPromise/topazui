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


export const MenuWithInput: Story = {
    args: {
        children: <>
            <Select.Menu>
                <Select.Button>
                    <Select.Input className="outline border-2" />
                </Select.Button>
                <Select.Option value={"first"}>First Item</Select.Option>
                <Select.Option value={"second"}>Second Item</Select.Option>
                <Select.Option value={"third"}>First Item</Select.Option>
                <Select.Option value={"fourth"}>Second Item</Select.Option>
                <Select.Option value={"fifth"}>First Item</Select.Option>
                <Select.Option value={"sixth"}>Second Item</Select.Option>
                <Select.Option value={"seventh"}>First Item</Select.Option>
                <Select.Option value={"eighth"}>Second Item</Select.Option>
            </Select.Menu>
        </>,

        error: false,
        withInput: true,
        onChange: (options) => console.log(options)
    }
}

export const MenuMultiple: Story = {
    args: {
        children: <>
            <Select.Menu>
                <Select.Option value={"first"}>First Item</Select.Option>
                <Select.Option value={"second"}>Second Item</Select.Option>
                <Select.Option value={"third"}>First Item</Select.Option>
                <Select.Option value={"fourth"}>Second Item</Select.Option>
                <Select.Option value={"fifth"}>First Item</Select.Option>
                <Select.Option value={"sixth"}>Second Item</Select.Option>
                <Select.Option value={"seventh"}>First Item</Select.Option>
                <Select.Option value={"eighth"}>Second Item</Select.Option>
            </Select.Menu>
        </>,

        error: false,
        multiple: true,
        onChange: (options) => console.log(options)
    }
}


export const CustomMenu: Story = {
    args: {
        children: <>
            <Select.Button className="rounded bg-gray-400 text-gray-text border-2 border-gray-300">

                <Select.IconsContainer className="text-black h-full">
                    <Select.IconsContainer.DropDownIcon className="bg-gray-200 w-[30px] border-2 rounded-r-sm">
                        <ChevronDoubleDownIcon width={18} />
                    </Select.IconsContainer.DropDownIcon>
                    <Select.IconsContainer.ClearIcon className="text-white" />
                </Select.IconsContainer>

            </Select.Button>

            <Select.Menu className="rounded bg-slate-200 space-y-[2px] text-white">
                <Select.Option value={"first"} className="bg-gray-400 hover:text-gray-500">First Item</Select.Option>
                <Select.Option value={"second"} className="bg-gray-400 hover:text-gray-500">Second Item</Select.Option>
            </Select.Menu>

            <Select.NoOptionMessage className="text-orange-400">Fuck</Select.NoOptionMessage>
        </>,

        error: false,
        onChange: (options) => console.log(options),

    }
}

export const List: Story = {
    args: {
        children: <>
            <Select.List>
                <Select.Option value="wow" >Wow</Select.Option>
                <Select.Option value="pow">Pow</Select.Option>
                <Select.Option value="sow" >Sow</Select.Option>
                <Select.Option value="how">How</Select.Option>
            </Select.List>
        </>,
        onChange: (options) => console.log(options)

    }
}

export const ListMultiple: Story = {
    args: {
        children: <>
            <Select.List>
                <Select.Option value="wow">Wow</Select.Option>
                <Select.Option value="pow">Pow</Select.Option>
                <Select.Option disabled value="sow" >Sow</Select.Option>
                <Select.Option value="how">How</Select.Option>
            </Select.List>
        </>,
        multiple: true,
        onChange: (options) => console.log(options)

    }
}
