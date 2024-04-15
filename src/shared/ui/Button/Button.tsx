import { classNames } from "shared/lib/classNames/classNames";
import { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: React.ReactNode;
	theme?: ThemeButton;
}

export const Button = (props: ButtonProps) => {
	const {
		className,
		children,
		theme,
		...otherProps
	} = props;

	return (
		<button
			type="button"
			className={classNames(cls.button, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</button>
	);
};
