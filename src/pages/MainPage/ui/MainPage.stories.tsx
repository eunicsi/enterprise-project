import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import MainPage from './MainPage';

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	decorators: [
		(Story) => {
			return StoreDecorator(<Story />, {
				counter: { value: 10 },
			});
		},
	],
};

export const PrimaryDark: Story = {
	decorators: [
		(Story) => {
			return ThemeDecorator(<Story />, Theme.DARK);
		},
		(Story) => {
			return StoreDecorator(<Story />, {
				counter: { value: 10 },
			});
		},
	],
};
