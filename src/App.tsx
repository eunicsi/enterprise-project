import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import './styles/index.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { Link } from 'react-router-dom';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



const App = () => {
	const {theme, toggleTheme } = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to='/'>main</Link>
			<Link to='/about'>about</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
						<Route path={'/'} element={<MainPageLazy />} />
						<Route path={'/about'} element={<AboutPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;