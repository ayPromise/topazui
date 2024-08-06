import { Meta, StoryObj } from "@storybook/react"
import DropDown from "."
import Button from "../Button"
import ExampleMenu from "./exampleMenu"
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
const meta: Meta<typeof DropDown> = {
    title: "Components/DropDown",
    component: DropDown,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const DefaultOnClick: Story = {
    args: {
        children: <>
            <DropDown.Header><Button hoverEffect="none" className="flex justify-between">Menu <ChevronDownIcon width={20} /></Button></DropDown.Header>
            <DropDown.Menu>
                <DropDown.Item href="#">First item</DropDown.Item>
                <DropDown.Item href="#">Second item</DropDown.Item>

                <DropDown.Item>

                    <DropDown alignSide="right">
                        <DropDown.Header className="flex justify-between">Third item <ChevronRightIcon width={20} /></DropDown.Header>
                        <DropDown.Menu>
                            <DropDown.Item>First item</DropDown.Item>
                            <DropDown.Item disabled>Second item</DropDown.Item>
                            <DropDown.Item>Third item</DropDown.Item>
                        </DropDown.Menu>
                    </DropDown>

                </DropDown.Item>

                <DropDown.Item href="#">Fourth item</DropDown.Item>
            </DropDown.Menu>
        </>,
    }
}

export const DefaultOnHover: Story = {
    args: {
        children: <>
            <DropDown.Header><Button hoverEffect="none" className="flex justify-between">Menu <ChevronDownIcon width={20} /></Button></DropDown.Header>
            <DropDown.Menu>
                <DropDown.Item href="#">First item</DropDown.Item>
                <DropDown.Item href="#">Second item</DropDown.Item>

                <DropDown.Item>

                    <DropDown alignSide="right" shownBy="hover">
                        <DropDown.Header className="flex justify-between">Third item <ChevronRightIcon width={20} /></DropDown.Header>
                        <DropDown.Menu>
                            <DropDown.Item>First item</DropDown.Item>
                            <DropDown.Item disabled>Second item</DropDown.Item>
                            <DropDown.Item>Third item</DropDown.Item>
                        </DropDown.Menu>
                    </DropDown>

                </DropDown.Item>

                <DropDown.Item href="#">Fourth item</DropDown.Item>
            </DropDown.Menu>
        </>,
        shownBy: 'hover'
    }
}


export const Custom: Story = {
    args: {
        children: <>
            <DropDown.Header>Menu</DropDown.Header>
            <DropDown.Content>
                <ExampleMenu />
            </DropDown.Content>
        </>,
        shownBy: 'hover'
    }
}
