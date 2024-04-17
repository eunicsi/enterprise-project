import { createPortal } from 'react-dom';

interface PortalProps {
	children: React.ReactNode;
	element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
	const { children, element = document.body } = props;

	return createPortal(children, element);
};

export default Portal;
