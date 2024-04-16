import { lazy } from 'react';

export const AboutPageLazy = lazy(() => {
	return import('./AboutPage');
});
