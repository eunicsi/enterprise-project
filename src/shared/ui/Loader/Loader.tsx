import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

console.log(cls);

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
