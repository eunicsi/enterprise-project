import { FC, ReactNode, useMemo, useState } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../../lib/ThemeContext';

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
	children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const toggleTheme = () => {
		setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
	};

	const defaultProps = useMemo(() => {
		return {
			theme,
			setTheme,
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
