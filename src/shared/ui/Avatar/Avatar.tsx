import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
}

export const Avatar = memo((props: AvatarProps) => {
	const { className, src, size, alt } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100,
		};
	}, [size]);

	return (
		<img
			src={src}
			alt={alt}
			style={styles}
			className={classNames(cls.avatar, {}, [className])}
		/>
	);
});
