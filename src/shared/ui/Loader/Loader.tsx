import { classNames } from "shared/lib/classNames/classNames";
import * as cls from "./Loader.module.scss";

const Loader = () => {
	return (
		<span
			className={classNames(cls.Loader, {}, [])}
		/>
	);
};

export default Loader;
