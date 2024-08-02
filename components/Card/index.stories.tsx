import { Meta, StoryObj } from "@storybook/react"
import Card from "."
import Link from "next/link"
import Button from "../Button"

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
    parameters: {
        layout: "centered"
    }
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
    args: {
        title: <a href="#">Noteworthy technology acquisitions</a>,
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        additionalContent: <Button hoverEffect="none">More details</Button>
    }
}

export const WithImage: Story = {
    args: {
        title: <a href="#">Noteworthy technology acquisitions</a>,
        image: "asd"
    }
}

export const Custom: Story = {
    args: {
        children: <div>
            <div>asdasd</div>
            <div>asdasd</div>
        </div>
    }
}