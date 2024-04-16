import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

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
		theme: ButtonTheme.CLEAR,
	},
};

export const Outline: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
	},
};

export const Background: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.BACKGROUND,
	},
};

export const BackgroundInverted: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.BACKGROUND_INVERTED,
	},
};

export const Square: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
	},
};

export const SquareM: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M,
	},
};

export const SquareL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
};
export const SquareXL: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
};

export const OutlineSizeM: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.M,
	},
};

export const OutlineSizeL: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.L,
	},
};

export const OutlineSizeXl: Story = {
	args: {
		children: 'Button',
		theme: ButtonTheme.OUTLINE,
		size: ButtonSize.XL,
	},
};
