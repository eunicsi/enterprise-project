import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		to: '/',
		children: 'Link',
	},
	decorators: [
		(Story) => {
			return RouterDecorator(<Story />);
		},
	],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
};

export const PrimaryDark: Story = {
	args: {
		theme: AppLinkTheme.PRIMARY,
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};

export const Secondary: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
};

export const SecondaryDark: Story = {
	args: {
		theme: AppLinkTheme.SECONDARY,
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
