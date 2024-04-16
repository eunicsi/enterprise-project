import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const { isDev } = options;

	const fileLoader = {
		test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
		type: 'asset/resource',
	};

	const babelLoader = {
		test: /\.(js|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
				plugins: [
					['i18next-extract', {
						locales: ['ru', 'en'],
						keyAsDefaultValue: true,
					}],
				],
			},
		},
	};

	const cssLoader = buildCssLoader(isDev);

	const tsLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

	return [
		fileLoader,
		babelLoader,
		tsLoader,
		cssLoader,
	];
}
