import { Meta, StoryObj } from "@storybook/react"
import Popover from "."
import TextLink from "../TextLink"

const meta: Meta<typeof Popover> = {
    title: "Components/Popover",
    component: Popover,
    parameters: {
        layout: "centered"
    }
}

export default meta


type Story = StoryObj<typeof Popover>

export const MoreInfo: Story = {
    args: {
        children: <>
            <Popover.Trigger><TextLink className="underline hover:no-underline"> Italy</TextLink></Popover.Trigger>
            <Popover.Content placement="bottom" className="min-w-[300px] border">
                <div className="space-y-2 p-4">
                    <h3 className="font-semibold text-gray-900 ">About Italy</h3>
                    <p>Italy is located in the middle of the Mediterranean Sea, in Southern Europe it is also considered part of Western Europe. A unitary parliamentary republic with Rome as its capital and largest city.</p>
                    <a href="#" className="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline">Read more </a>
                </div>
            </Popover.Content>
        </>,
    }
}

export const Profile: Story = {
    args: {
        children: <>
            <Popover.Trigger><TextLink className="underline hover:no-underline"> @jeseleos</TextLink></Popover.Trigger>
            <Popover.Content placement="top" className="min-w-[220px]">
                <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                        <TextLink><div className="size-10 bg-gray-300 rounded-full" /></TextLink>
                        <div>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 focus:outline-none ">Follow</button>
                        </div>
                    </div>
                    <p className="text-base font-semibold leading-none text-gray-900 ">
                        <TextLink href="#" className="text-black hover:no-underline">Jese Leos</TextLink>
                    </p>
                    <p className="mb-3 text-sm font-normal">
                        <TextLink href="#" className="text-gray-600">@jeseleos</TextLink>
                    </p>
                    <p className="mb-4 text-sm">Open-source contributor. Building <TextLink href="#" className="text-blue-600  hover:underline">flowbite.com</TextLink>.</p>
                    <ul className="flex text-sm">
                        <li className="me-2">
                            <TextLink href="#" className="text-gray-600 flex gap-1">
                                <span className="font-semibold text-gray-900 ">799</span>
                                <span>Following</span>
                            </TextLink>
                        </li>
                        <li>
                            <TextLink href="#" className="text-gray-600 flex gap-1">
                                <span className="font-semibold text-gray-900">3,758</span>
                                <span>Followers</span>
                            </TextLink>
                        </li>
                    </ul>
                </div>
            </Popover.Content>
        </>,
    }
}