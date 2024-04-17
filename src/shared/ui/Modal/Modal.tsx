import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useEffect } from 'react';
import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	className?: string;
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

const Modal = (props: ModalProps) => {
	const { className, children, isOpen, onClose } = props;

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				closeHandler();
			}
		},
		[closeHandler],
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	};

	return (
		<Portal>
			<div className={classNames(cls.modal, mods, [className])}>
				<div className={cls.overlay} onClick={closeHandler}>
					<div className={cls.content} onClick={onContentClick}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
