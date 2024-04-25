import { IconType } from 'react-icons';
import { MdDescription } from 'react-icons/md';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: IconType;
	authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Главная',
		Icon: MdDescription,
	},
	{
		path: RoutePath.about,
		text: 'О сайте',
		Icon: MdDescription,
	},
	{
		path: RoutePath.profile,
		text: 'Профиль',
		Icon: MdDescription,
		authOnly: true,
	},
];
