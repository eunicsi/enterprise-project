import { classNames } from 'shared/lib/classNames/classNames';
import Loader from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

const PageLoader = () => {
	return (
		<div className={classNames(cls.pageLoader, {}, [])}>
			<Loader />
		</div>
	);
};

export default PageLoader;
