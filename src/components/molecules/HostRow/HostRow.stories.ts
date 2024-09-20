import type { StoryObj, Meta } from '@storybook/react';
import HostRow from '@/components/molecules/HostRow/HostRow';

type Story = StoryObj<typeof HostRow>;

export default {
    title: 'Molecules/Host Row',
    component: HostRow,
    tags: ['autodocs'],
    args: {
        title: 'Raspberry Pi',
        isExpertMode: false,
        isAlive: true
    },
    argTypes: {}
} satisfies Meta<typeof HostRow>;

export const Default: Story = {};
