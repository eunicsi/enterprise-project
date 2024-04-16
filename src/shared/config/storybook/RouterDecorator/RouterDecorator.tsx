import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (children: any) => {
	return <BrowserRouter>{children}</BrowserRouter>;
};
