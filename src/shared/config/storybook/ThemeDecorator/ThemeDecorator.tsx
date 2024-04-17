import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (children: any, theme?: Theme) => {
	return (
		<ThemeProvider initialTheme={theme}>
			<div className={`app ${theme}`}>{children}</div>
		</ThemeProvider>
	);
};
