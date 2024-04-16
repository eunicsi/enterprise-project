import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (children: any, theme?: Theme) => {
	return <div className={`app ${theme}`}>{children}</div>;
};
