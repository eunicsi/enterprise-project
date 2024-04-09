import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './ThemeSwitcher.module.scss';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const {theme, toggleTheme } = useTheme();
	
	return (
		<Button 
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className])}
			onClick={toggleTheme}
		>
			{theme === Theme.DARK ? <IconMoon /> : <IconSun />}
		</Button>
	);
};

export default ThemeSwitcher;