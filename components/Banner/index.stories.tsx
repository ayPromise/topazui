import { Meta, StoryObj } from "@storybook/react"
import Banner from "."

const meta: Meta<typeof Banner> = {
    title: "Components/Banner",
    component: Banner,
    parameters: {
        layout: "centered"
    }
}


export default meta

type Story = StoryObj<typeof Banner>

export const Top: Story = {
    args: {
        children: <>
            <Banner.Content>
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span>Get 5% commission per sale <a href="#" className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner</a></span>
                    </p>
                </div>
            </Banner.Content>
            <Banner.CollapseButton></Banner.CollapseButton>
        </>,
        placement: 'top'
    },
};

export const TopCustom: Story = {
    args: {
        children: <>
            <Banner.Content>
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span>Get 5% commission per sale <a href="#" className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner</a></span>
                    </p>
                </div>
            </Banner.Content>
            <Banner.CollapseButton></Banner.CollapseButton>
        </>,
        placement: 'top',
        className: 'w-[calc(100%-2rem)] rounded top-4'
    },
};

export const Bottom: Story = {
    args: {
        children: <>
            <Banner.Content>
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span>Get 5% commission per sale <a href="#" className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner</a></span>
                    </p>
                </div>
            </Banner.Content>
            <Banner.CollapseButton></Banner.CollapseButton>
        </>,
        placement: 'bottom'
    },
};

export const BottomCustom: Story = {
    args: {
        children: <>
            <Banner.Content className="">
                <div className="flex items-center mx-auto">
                    <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                        <span>Get 5% commission per sale <a href="#" className="flex items-center ms-0 text-sm font-medium text-blue-600 md:ms-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner</a></span>
                    </p>
                </div>
            </Banner.Content>
            <Banner.CollapseButton></Banner.CollapseButton>
        </>,
        placement: 'bottom',
        className: 'w-[calc(100%-2rem)] rounded bottom-4'

    },
};

