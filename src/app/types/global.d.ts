declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';

declare const __IS_DEV__: boolean;
declare const __API__: string;

type DeepPartial<T> = T extends object
	? {
		[P in keyof T]?: DeepPartial<T[P]>; // eslint-disable-line
	} // eslint-disable-line
	: T;
