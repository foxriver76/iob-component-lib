import type { StoryObj, Meta } from '@storybook/react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';

type Story = StoryObj<typeof InfoBox>;

export default {
    title: 'Molecules/Info Box',
    component: InfoBox,
    tags: ['autodocs'],
    args: {
        children:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam',
        type: 'info'
    },
    argTypes: {}
} satisfies Meta<typeof InfoBox>;

export const Default: Story = {};
