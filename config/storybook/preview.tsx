import { Preview } from '@storybook/react';

import React from 'react';
import 'app/styles/index.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		(Story) => {
			return (
				<div className="app light">
					<Story />
				</div>
			);
		},
	],
};

export default preview;
