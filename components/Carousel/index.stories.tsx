import { Meta, StoryObj } from '@storybook/react';
import Carousel from './';
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ["autodoc"],
    parameters: {
        layout: 'centered'
    }
};

export default meta

type Story = StoryObj<typeof Carousel>

export const Default: Story = {
    args: {
        children: <>
            <Carousel.Item>
                <Carousel.Image></Carousel.Image>
                <Carousel.Caption>Text 1</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image></Carousel.Image>
                <Carousel.Caption>Text 2</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image></Carousel.Image>
                <Carousel.Caption>Text 3</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image></Carousel.Image>
                <Carousel.Caption>Text 4</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image></Carousel.Image>
                <Carousel.Caption>Text 5</Carousel.Caption>
            </Carousel.Item>
        </>
    }
}


export const Custom: Story = {
    args: {
        children: <>
            <Carousel.Item>
                <Carousel.Image placeholder='First image' />
                <Carousel.Caption>Text 1</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image placeholder='Second image' />
                <Carousel.Caption>Text 2</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image placeholder='Third image' />
                <Carousel.Caption>Text 3</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image placeholder='Fourth image' />
                <Carousel.Caption>Text 4</Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Image placeholder='Fifth image' />
                <Carousel.Caption>Text 5</Carousel.Caption>
            </Carousel.Item>

            <Carousel.SlideBack className='bg-red-solid hover:bg-gray-400'>
                <ChevronDoubleLeftIcon width={30} />
            </Carousel.SlideBack>

            <Carousel.SlideNext className='bg-indigo-solid hover:bg-gray-400'>
                <ChevronDoubleRightIcon width={30} />
            </Carousel.SlideNext>
        </>
    }
}