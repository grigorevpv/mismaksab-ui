import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '../desktop/Header/Header';

const meta: Meta<typeof Header> = {
    title: 'header',
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Basic: Story = {};
