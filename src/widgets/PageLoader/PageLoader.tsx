import { classNames } from "shared/lib/classNames/classNames";
import Loader from "shared/ui/Loader/Loader";
import * as cls from "./PageLoader.module.scss";

const PageLoader = () => {
	return (
		<div className={classNames(cls.PageLoader, {}, [])}><Loader /></div>
	);
};

export default PageLoader;
