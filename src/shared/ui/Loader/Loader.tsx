import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

const Loader = () => {
	return (
		<div className={classNames(cls.loader, {}, [])}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
};

export default Loader;
