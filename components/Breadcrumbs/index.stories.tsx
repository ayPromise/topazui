import { Meta, StoryObj } from "@storybook/react"
import Breadcrumbs from "."
import Link from "next/link"
import TextLink from "../TextLink"
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const meta: Meta<typeof Breadcrumbs> = {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
    parameters: {
        layout: "centered"
    }
}


export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
    args: {
        children: <>
            <a href={'#'}>Home</a>
            <a href={'#'}>Projects</a>
            <a href={'#'}>TopazUI</a>
        </>
    }
}

export const DefaultWithLimit: Story = {
    args: {
        children: <>
            <a href={'#'}>Home</a>
            <a href={'#'}>Projects</a>
            <a href={'#'}>TopazUI</a>
        </>,
        maxItems: 2
    }
}


export const Custom: Story = {
    args: {
        children: <>
            <a href={'#'} className="hover:text-orange-solid">Home</a>
            <a href={'#'} className="hover:text-indigo-solid">Projects</a>
            <a href={'#'} className="hover:text-pink-solid">My project</a>
            <a href={'#'} className="hover:text-blue-solid">Collaborators</a>
            <a href={'#'} className="hover:text-green-solid">Profile</a>
        </>,
        separator: <ChevronRightIcon width={20} />,
        className: "gap-2",
        maxItems: 2
    }
}