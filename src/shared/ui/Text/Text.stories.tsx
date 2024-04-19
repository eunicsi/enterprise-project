import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

const meta = {
	title: 'shared/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Title lorem ipsum',
		text: 'Text lorem ipsum',
	},
};

export const PrimaryDark: Story = {
	args: {
		title: 'Title lorem ipsum',
		text: 'Text lorem ipsum',
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};

export const Error: Story = {
	args: {
		title: 'Title lorem ipsum',
		text: 'Text lorem ipsum',
		theme: TextTheme.ERROR,
	},
};

export const ErrorDark: Story = {
	args: {
		title: 'Title lorem ipsum',
		text: 'Text lorem ipsum',
		theme: TextTheme.ERROR,
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
