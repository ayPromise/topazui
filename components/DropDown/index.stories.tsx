import { Meta, StoryObj } from "@storybook/react"
import DropDown from "."
import Button from "../Button"
import { ChevronDownIcon } from "@heroicons/react/24/solid"
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
                    HeaderComponent={<div>Price</div>}
                    items={[{ title: "First item", path: "fourth/first" }, {
                        title: "Second item",
                        path: "about/you"
                    }, {
                        title: "Third item",
                        action: () => alert("You pressed the option")
                    },]}
                    arrowIcon={true}

                    alignSide='right'
                    shownBy="hover"
                />,
                isSeparated: true,
            }
        ],
        HeaderComponent: <Button clickAnimation={false} hoverEffect="none">Menu</Button>,
        arrowIcon: true,
        alignSide: 'center'
    }
}

export const Custom: Story = {
    args: {
        HeaderComponent: <div>Price</div>,
        MenuComponent: <ExampleMenu></ExampleMenu>,
        shownBy: 'hover'
    }
}