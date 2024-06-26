import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { memo } from 'react';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
	const { className, short } = props;
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<Button
			className={classNames(cls.langSwitcher, {}, [className])}
			theme={ButtonTheme.CLEAR}
			onClick={toggle}
		>
			{t(short ? 'Короткий язык' : 'Язык')}
		</Button>
	);
});

export default LangSwitcher;
