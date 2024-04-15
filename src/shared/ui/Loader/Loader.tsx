import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

const Loader = () => {
	return (
		<span
			className={classNames(cls.loader, {}, [])}
		/>
	);
};

export default Loader;
