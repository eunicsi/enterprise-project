import {
	getProfileReadonly,
	profileActions,
	updateProfileData,
} from 'entitie/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { className } = props;

	const { t } = useTranslation();

	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]);

	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(cls.profilePageHeader, {}, [className])}>
			<Text title={t('Профиль')} />
			{readonly ? (
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
					onClick={onEdit}
				>
					{t('Редактировать')}
				</Button>
			) : (
				<>
					<Button
						theme={ButtonTheme.OUTLINE_RED_INVERTED}
						className={cls.editBtn}
						onClick={onCancelEdit}
					>
						{t('Отменить')}
					</Button>
					<Button
						theme={ButtonTheme.OUTLINE}
						className={cls.editBtn}
						onClick={onSave}
					>
						{t('Сохранить')}
					</Button>
				</>
			)}
		</div>
	);
};
