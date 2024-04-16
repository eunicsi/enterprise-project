import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from './Button';

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		children: 'Button',
	},
};

export const PrimaryDark: Story = {
	args: {
		children: 'Button',
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};

export const Clear: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.CLEAR,
	},
};

export const Outlined: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
};

export const OutlinedDark: Story = {
	args: {
		children: 'Button',
		theme: ThemeButton.OUTLINE,
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
