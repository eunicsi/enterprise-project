import type { Meta, StoryObj } from '@storybook/react';

import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Avatar } from './Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	decorators: [
		(Story) => {
			return RouterDecorator(<Story />);
		},
	],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		size: 150,
		src: AvatarImg,
	},
};
