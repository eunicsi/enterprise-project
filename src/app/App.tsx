import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entitie/User';
import { useNavigate } from 'react-router-dom';
import { AppRouter } from './providers/router';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';

const App = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	useLayoutEffect(() => {
		document.body.className = theme;
	});
	// test
	return (
		<div className={classNames('app', {}, [])}>
			<Suspense fallback="">
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
