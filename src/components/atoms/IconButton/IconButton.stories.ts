import type { StoryObj, Meta } from '@storybook/react';
import IconButton from '@/components/atoms/IconButton/IconButton';
import { fn } from '@storybook/test';

type Story = StoryObj<typeof IconButton>;

export default {
    title: 'Atoms/Icon Button',
    component: IconButton,
    tags: ['autodocs'],
    args: {
        onClick: fn(),
        tooltipText: 'This is a super important button',
        disabled: false,
        icon: 'wifi',
        noBackground: false,
        iconColor: 'primary'
    }
} satisfies Meta<typeof IconButton>;

export const Default: Story = {};

export const Disabled: Story = {
    args: {
        disabled: true
    }
};
