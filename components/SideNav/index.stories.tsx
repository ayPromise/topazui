import { Meta, StoryObj } from "@storybook/react"
import SideNav from "."
import { BuildingLibraryIcon, ChartBarIcon, InboxIcon } from "@heroicons/react/24/solid"
import DropDown from "../DropDown"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

const meta: Meta<typeof SideNav> = {
    title: "Components/SideNav",
    component: SideNav
}

export default meta

type Story = StoryObj<typeof SideNav>

export const Default: Story = {
    args: {
        items: [
            {
                title: "Dashboard",
                path: "/dashboard",
                addContent: "New"
            },
            {
                title: "Kanban",
                path: "/kanban"
            },
            {
                title: "Inbox",
                path: "/inbox",
                addContent: "3"
            },
            {
                title: "Check updates",
                action: () => alert("Very well")
            },
            {
                title: "Users",
                path: "/users"
            },
            {
                title: "Products",
                path: "/products"
            },
            {
                title: "Sign In",
                path: "/signin"
            },
            {
                title: "Sign Up",
                path: "/signup"
            }
        ],
    }
}

export const Custom: Story = {
    args: {
        items: [
            {
                title: "Dashboard",
                path: "/dashboard",
                addContent: "New",
                icon: <ChartBarIcon width={15}></ChartBarIcon>
            },
            {
                title: "KanBan",
            },
            {
                title: "Inbox",
                path: "/inbox",
                addContent: "3",
                icon: <InboxIcon width={15}></InboxIcon>
            },
            {
                title: "Check updates",
                action: () => alert("Very well")
            },
            {
                title: "Users",
                path: "/users"
            },
            {
                title: "Products",
                path: "/products"
            },
            {
                title: "Sign In",
                path: "/signin"
            },
            {
                title: "Sign Up",
                path: "/signup"
            }
        ],
        separatedFrom: [1, 4, 6],
        customStyles: {
            separateLine: "border-green-solid border-2 rounded",
            sideBar: "border-r-4 border-green-solid",
            item: "hover:bg-green-hover"
        },
        title: "Topazui",
        logo: <BuildingLibraryIcon width={35}></BuildingLibraryIcon>
    }
}