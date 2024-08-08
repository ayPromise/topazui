import { Meta, StoryObj } from "@storybook/react"
import Accordion from "."
import TextLink from "../TextLink"

const meta: Meta<typeof Accordion> = {
    title: "Components/Accardion",
    component: Accordion,
    parameters: {
        layout: "centered"
    }
}


export default meta

type Story = StoryObj<typeof Accordion>

export const Default: Story = {
    args: {
        children: <>
            <Accordion.Item>
                <Accordion.Header>What is Flowbite?</Accordion.Header>
                <Accordion.Body>        <div className="p-5">
                    <p className="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 ">Check out this guide to learn how to <TextLink href="#">get started</TextLink> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item defaultOpen={true}>
                <Accordion.Header>What is Python?</Accordion.Header>
                <Accordion.Body>        <div className="p-5">
                    <p className="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 ">Check out this guide to learn how to <TextLink href="#">get started</TextLink> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item>
                <Accordion.Header>What is React?</Accordion.Header>
                <Accordion.Body>        <div className="p-5">
                    <p className="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                    <p className="text-gray-500 ">Check out this guide to learn how to <TextLink href="#">get started</TextLink> and start developing websites even faster with components on top of Tailwind CSS.</p>
                </div>
                </Accordion.Body>
            </Accordion.Item>
        </>,
        multipleSelection: false
    }
}