import { Meta, StoryObj } from "@storybook/react"
import DropDown from "."
import Button from "../Button"
import { ChevronRightIcon, ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import ExampleMenu from "./exampleMenu"
const meta: Meta<typeof DropDown> = {
    title: "Components/DropDown",
    component: DropDown,
    tags: ["autodoc"]
}

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        HeaderComponent: <Button className="justify-around" clickAnimation={false} hoverEffect="none">Menu <ChevronDownIcon width={20} /></Button>,
        alignSide: "center",
        shownBy: "hover",
        items: [
            {
                title: "First item",
                path: "about/me"
            },
            {
                title: "Second item",
                path: "about/you"
            },
            {
                title: "Third item",
                action: () => alert("You pressed the option")
            },
            {
                NestedDropDownMenu: <DropDown
                    HeaderComponent={<div className="flex justify-between"> Price <ChevronRightIcon width={20} /></div>}
                    items={[{ title: "First item", path: "fourth/first" }, {
                        title: "Second item",
                        path: "about/you"
                    }, {
                        title: "Third item",
                        action: () => alert("You pressed the option")
                    },]}

                    alignSide='right'
                    shownBy="click"
                />,
                isSeparated: true,
            }
        ],
    }
}

export const Custom: Story = {
    args: {
        HeaderComponent: <div>Price </div>,
        MenuComponent: <ExampleMenu></ExampleMenu>,
        shownBy: 'hover'
    }
}