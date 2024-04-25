import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Input from './Input';

const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		value: 'Random text',
	},
};

export const PrimaryDark: Story = {
	args: {
		value: 'Random text',
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
