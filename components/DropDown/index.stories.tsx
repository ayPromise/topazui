import { Meta, StoryObj } from "@storybook/react"
import DropDown from "."
import Button from "../Button"
import { ChevronRightIcon, ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/solid"
import ExampleMenu from "./exampleMenu"
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

export const Default: Story = {
    args: {
        HeaderComponent: <Button className="justify-around" clickAnimation={false} hoverEffect="none">Menu <ChevronDownIcon width={20} /></Button>,
        alignSide: "center",
        shownBy: "click",
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
        ]
    }
}

export const CustomDefault: Story = {
    args: {
        HeaderComponent: <Button className="justify-around" clickAnimation={false} hoverEffect="none">Menu <ChevronDownIcon width={20} /></Button>,
        alignSide: "center",
        shownBy: "click",
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
        customStyles: {
            menu: "w-[300px] bg-red-solid text-red-text",
            item: "hover:bg-black"
        }
    }
}

export const AllCustom: Story = {
    args: {
        HeaderComponent: <div className="hover:text-green-solid font-bold">Products </div>,
        MenuComponent: <ExampleMenu />,
        shownBy: "click",
        alignSide: 'center',
        customStyles: {
            menu: 'top-[calc(100%+1.5rem)]',
            selectedItems: 'text-green-solid'
        },
        selectFlag: true,
    }
}