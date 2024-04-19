import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';
import webpack, { DefinePlugin } from 'webpack';
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
	staticDirs: ['../../public'],

	webpackFinal: async (config: webpack.Configuration) => {
		const paths: BuildPaths = {
			build: '',
			html: '',
			entry: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
		};

		config.resolve?.modules?.push(paths.src);
		config.resolve?.extensions?.push('.ts', '.tsx');

		config.module?.rules?.push(buildCssLoader(true));

		config.plugins?.push(
			new DefinePlugin({
				__IS_DEV__: true,
				__API__: JSON.stringify(''),
			}),
		);

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
