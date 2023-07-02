import type { Meta, StoryObj } from '@storybook/react';

import { GoodCard } from '../common/GoodCard/GoodCard';

const meta: Meta<typeof GoodCard> = {
    title: 'good card',
  component: GoodCard,
};

export default meta;
type Story = StoryObj<typeof GoodCard>;

export const Basic: Story = {
    args: {
        imageURL: 'https://www.selver.ee/img/800/800/resize/4/7/4740125000108.jpg',
        discount: 21,
        market: 'selver',
        price: 4.29,
        oldPrice: 5.49,
        title: 'Корм собачий ORLANDO GOURVE, 3 кг',
        pricePerKilo: 1.43,
        discountUntil: 15.04,
        disabled: false
    }
};
