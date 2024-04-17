import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

import App from './app/App';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18n';

const root = document.getElementById('root');

if (!root) {
	throw new Error('root not found');
}

const container = createRoot(root);

container.render(
	<BrowserRouter>
		<ErrorBoundary>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</ErrorBoundary>
	</BrowserRouter>,
);
