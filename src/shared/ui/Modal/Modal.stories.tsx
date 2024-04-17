import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Modal from './Modal';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		isOpen: true,
		children: 'Modal',
	},
};

export const PrimaryDark: Story = {
	args: {
		isOpen: true,
		children: 'Modal',
	},
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
	],
};
