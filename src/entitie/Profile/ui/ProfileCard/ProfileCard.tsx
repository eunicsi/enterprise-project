import { Country, CountrySelect } from 'entitie/Country';
import { CurrencySelect } from 'entitie/Currency';
import { Currency } from 'entitie/Currency/model/types/currency';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	error?: string;
	isLoading?: boolean;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		data,
		error,
		isLoading,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCountry,
	} = props;

	const { t } = useTranslation();

	if (isLoading) {
		return (
			<div
				className={classNames(
					cls.profileCard,
					{ [cls.loading]: true },
					[className],
				)}
			>
				<Loader />
			</div>
		);
	}

	if (error) {
		return (
			<div
				className={classNames(cls.profileCard, {}, [
					className,
					cls.error,
				])}
			>
				<Text
					theme={TextTheme.ERROR}
					title={t('Произошла ошибка при загрузке профиля')}
					text={t('попробуйте обновить страницу')}
					align={TextAlign.CENTER}
				/>
			</div>
		);
	}

	return (
		<div
			className={classNames(
				cls.ProfileCard,
				{ [cls.editing]: !readonly },
				[className],
			)}
		>
			<div className={cls.data}>
				{data?.avatar && (
					<div className={cls.avatarWrapper}>
						<Avatar src={data?.avatar} />
					</div>
				)}
				<Input
					value={data?.first}
					placeholder={t('Ваше имя')}
					className={cls.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваша фамилия')}
					className={cls.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
				<Input
					value={data?.age}
					placeholder={t('Ваш возраст')}
					className={cls.input}
					onChange={onChangeAge}
					readonly={readonly}
					type="number"
				/>
				<Input
					value={data?.city}
					placeholder={t('Ваш город')}
					className={cls.input}
					onChange={onChangeCity}
					readonly={readonly}
				/>
				<Input
					value={data?.username}
					placeholder={t('Имя пользователя')}
					className={cls.input}
					onChange={onChangeUsername}
					readonly={readonly}
				/>
				<Input
					value={data?.avatar}
					placeholder={t('Аватар')}
					className={cls.input}
					onChange={onChangeAvatar}
					readonly={readonly}
				/>
				<CurrencySelect
					className={cls.input}
					value={data?.currency}
					onChange={onChangeCurrency}
					readonly={readonly}
				/>
				<CountrySelect
					className={cls.input}
					value={data?.country}
					onChange={onChangeCountry}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
