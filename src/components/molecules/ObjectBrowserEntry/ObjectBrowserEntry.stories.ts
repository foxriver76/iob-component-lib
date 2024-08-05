import type { StoryObj, Meta } from '@storybook/react';
import ObjectBrowserEntry from './ObjectBrowserEntry';

type Story = StoryObj<typeof ObjectBrowserEntry>;

export default {
    title: 'Molecules/Object Browser Entry',
    component: ObjectBrowserEntry,
    tags: ['autodocs'],
    args: {},
    argTypes: {}
} satisfies Meta<typeof ObjectBrowserEntry>;

export const Default: Story = {};
