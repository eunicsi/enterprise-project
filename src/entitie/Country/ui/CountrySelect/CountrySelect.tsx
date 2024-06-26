import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
	className?: string;
	value?: Country;
	onChange?: (value: Country) => void;
	readonly?: boolean;
}

const options = [
	{ value: Country.ARMENIA, content: Country.ARMENIA },
	{ value: Country.BELARUS, content: Country.BELARUS },
	{ value: Country.KAZAKHSTAN, content: Country.KAZAKHSTAN },
	{ value: Country.RUSSIA, content: Country.RUSSIA },
];

export const CountrySelect = memo(
	({ className, value, onChange, readonly }: CountrySelectProps) => {
		const { t } = useTranslation();

		const onChangeHandler = useCallback(
			(value: string) => {
				onChange?.(value as Country);
			},
			[onChange],
		);

		return (
			<Select
				className={classNames('', {}, [className])}
				label={t('Укажите страну')}
				options={options}
				value={value}
				onChange={onChangeHandler}
				readonly={readonly}
			/>
		);
	},
);
