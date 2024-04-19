import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_INVERTED = 'outlineInverted',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
	M = 'sizeM',
	L = 'sizeL',
	XL = 'sizeXl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: React.ReactNode | string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		theme,
		square,
		disabled,
		size = ButtonSize.M,
		...otherProps
	} = props;

	const mods = {
		[cls.square]: square,
		[cls.disabled]: disabled,
	};

	return (
		<button
			type="button"
			className={classNames(cls.button, mods, [
				className,
				cls[theme],
				cls[size],
			])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
