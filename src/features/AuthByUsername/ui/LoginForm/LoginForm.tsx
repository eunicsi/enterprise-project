import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector, useStore } from 'react-redux';
import { memo, useCallback, useEffect } from 'react';
import {
	loginActions,
	loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import DynamicModuleLoader, {
	ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
	className?: string;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const username = useSelector(getLoginUsername);
	const error = useSelector(getLoginError);
	const password = useSelector(getLoginPassword);
	const isLoading = useSelector(getLoginIsLoading);

	const onChangeUsername = useCallback(
		(value: string) => {
			dispatch(loginActions.setUsername(value));
		},
		[dispatch],
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch],
	);

	const onLoginClick = useCallback(() => {
		dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
			<div className={classNames(cls.loginForm, {}, [className])}>
				<Text title={t('Форма авторизации')} />
				{error && (
					<Text
						theme={TextTheme.ERROR}
						text={t('Вы ввели неверный логин или пароль')}
					/>
				)}
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите логин')}
					autoFocus
					onChange={onChangeUsername}
					value={username}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите пароль')}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					disabled={isLoading}
					theme={ButtonTheme.OUTLINE_INVERTED}
					className={cls.loginBtn}
					onClick={onLoginClick}
				>
					{t('Войти')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default LoginForm;
