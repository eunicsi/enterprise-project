import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Select } from './Select';

const meta = {
	title: 'shared/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Укажите значение',
		options: [
			{ value: '1', content: 'text1' },
			{ value: '2', content: 'text2' },
		],
	},
};

export const PrimaryDark: Story = {
	args: {
		label: 'Укажите значение',
		options: [
			{ value: '1', content: 'text1' },
			{ value: '2', content: 'text2' },
		],
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
