import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import Sidebar from './Sidebar';

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
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
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
