import { Meta, StoryObj } from "@storybook/react"
import SideNav from "."
import { EyeIcon, } from "@heroicons/react/24/outline"
import { ChartPieIcon, UsersIcon, InboxIcon, BuildingStorefrontIcon, FireIcon, ArrowLeftStartOnRectangleIcon, DocumentIcon, BeakerIcon, LifebuoyIcon } from "@heroicons/react/24/solid"

const meta: Meta<typeof SideNav> = {
    title: "Components/SideNav",
    component: SideNav
}

export default meta

type Story = StoryObj<typeof SideNav>

export const Default: Story = {
    args: {
        children: <>
            <SideNav.Menu>
                <SideNav.Item href="#"><ChartPieIcon width={20} />Kanban</SideNav.Item>
                <SideNav.Item href="#"><InboxIcon width={20} />Inbox</SideNav.Item>
                <SideNav.Item href="#"><UsersIcon width={20} />Users</SideNav.Item>
                <SideNav.Item href="#"><BuildingStorefrontIcon width={20} />Products</SideNav.Item>
                <SideNav.SeparateLine />
                <SideNav.Item onClick={() => alert("Hooray")}><ArrowLeftStartOnRectangleIcon width={20} />Sign In</SideNav.Item>
            </SideNav.Menu>
        </>,

        isOpen: true
    }
}

export const Custom: Story = {
    args: {
        children: <>
            <SideNav.Menu className="bg-sky-900 text-white">
                <SideNav.Header href="#"><EyeIcon width={28} />TopazUI</SideNav.Header>

                <SideNav.Item href="#" className="text-white bg-sky-800 border-l-2 rounded-none hover:text-black">
                    <ChartPieIcon width={20} />
                    Kanban
                </SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><InboxIcon width={20} />Inbox</SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><UsersIcon width={20} />Users</SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><BuildingStorefrontIcon width={20} />Products</SideNav.Item>
                <SideNav.Item className="text-white rounded-none hover:text-black" onClick={() => alert("Hooray")}><ArrowLeftStartOnRectangleIcon width={20} />Sign In</SideNav.Item>

                <SideNav.SeparateLine className="my-[10px]" />

                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><FireIcon width={20} />Upgrade to Pro</SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><DocumentIcon width={20} />Documentation</SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><BeakerIcon width={20} />Components</SideNav.Item>
                <SideNav.Item href="#" className="text-white rounded-none hover:text-black"><LifebuoyIcon width={20} />Help</SideNav.Item>

            </SideNav.Menu>
        </>
    }
}