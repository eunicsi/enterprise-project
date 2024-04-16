import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
	className?: string;
	children?: React.ReactNode;
}

const BugButton = (props: BugButtonProps) => {
	const { className, children } = props;
	const { t } = useTranslation();

	const [error, setError] = useState(false);

	const throwError = () => {
		return setError(true);
	};

	useEffect(() => {
		if (error) throw new Error('123');
	}, [error]);

	return (
		// eslint-disable-next-line i18next/no-literal-string
		<Button
			onClick={throwError}
			className={classNames('', {}, [className])}
		>
			{t('throw error')}
		</Button>
	);
};

export default BugButton;
