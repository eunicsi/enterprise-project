import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	className?: string;
	children: React.ReactNode | string;
	theme?: AppLinkTheme;
}

const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.appLink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});

export default AppLink;
