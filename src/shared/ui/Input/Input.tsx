import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		value,
		placeholder,
		onChange,
		type = 'text',
		autoFocus,
		...otherProps
	} = props;

	const ref = useRef<HTMLInputElement>(null);

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	useEffect(() => {
		if (autoFocus) {
			ref.current?.focus();
		}
	}, [autoFocus]);

	return (
		<div className={classNames(cls.input, {}, [className])}>
			<input
				ref={ref}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChangeHandler}
				{...otherProps}
			/>
		</div>
	);
});
