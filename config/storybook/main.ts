import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
	stories: ['../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-webpack5-compiler-swc',
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
	],
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	webpackFinal: async (config) => {
		const paths: BuildPaths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
		};

		config.resolve?.modules?.push(paths.src);
		config.resolve?.extensions?.push('.ts', '.tsx');

		config.module?.rules?.push(buildCssLoader(true));

		return config;
	},
	swc: () => {
		return {
			jsc: {
				transform: {
					react: {
						runtime: 'automatic',
					},
				},
			},
		};
	},
};

export default config;
