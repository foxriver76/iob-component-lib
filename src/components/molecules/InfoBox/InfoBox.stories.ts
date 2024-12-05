import type { StoryObj, Meta } from '@storybook/react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import { fn } from '@storybook/test';

type Story = StoryObj<typeof InfoBox>;

export default {
    title: 'Molecules/Info Box',
    component: InfoBox,
    tags: ['autodocs'],
    args: {
        children:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
        type: 'info',
        closeable: false,
        onClose: fn()
    },
    argTypes: {}
} satisfies Meta<typeof InfoBox>;

export const Default: Story = {};

export const Warning: Story = {
    args: {
        type: 'warning'
    }
};

export const Error: Story = {
    args: {
        type: 'error'
    }
};

export const Closeable: Story = {
    args: {
        closeable: true
    }
};
