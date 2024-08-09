import React, { Children, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./";
import Tab from "./components/Tab";
import TabPanel from "./components/TabPanel";

const meta: Meta<typeof Tabs> = {
    title: "Components/Tabs",
    component: Tabs,
    parameters: {
        layout: "centered"
    }
}

export default meta;

type Story = StoryObj<typeof Tabs>;

export const DefaultRow: Story = {
    args:
    {
        children: <>
            <Tab value={'tab-1'}>Item 1</Tab>
            <Tab value={'tab-2'}>Item 2</Tab>
            <Tab value={'tab-3'}>Item 3</Tab>


            <div className="absolute top-[200px]">

                <TabPanel value="tab-1">Item One</TabPanel>
                <TabPanel value="tab-2">Item Two</TabPanel>
                <TabPanel value="tab-3">Item Three</TabPanel>

            </div>
        </>,
        className: 'text-black gap-6'
    }
}

