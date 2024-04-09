import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider/lib/useTheme';
import { classNames } from '../shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { AppRouter } from './providers/router';

const App = () => {
	const {theme, toggleTheme } = useTheme();
	
	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>toggle theme</button>
			<Link to='/'>main</Link>
			<Link to='/about'>about</Link>
			<AppRouter />
		</div>
	);
};

export default App;