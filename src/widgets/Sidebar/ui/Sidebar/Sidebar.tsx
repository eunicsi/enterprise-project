import { classNames } from "shared/lib/classNames/classNames";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import LangSwitcher from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
	className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const { t } = useTranslation();

	const onToggle = () => {
		setCollapsed((prev) => { return !prev; });
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
		>
			<Button
				data-testid="sidebar-toggle"
				type="button"
				onClick={onToggle}
			>
				{t("Переключить")}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
