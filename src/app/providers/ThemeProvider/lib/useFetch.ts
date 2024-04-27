// import { useContext, useEffect } from 'react';
// import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

// interface UseThemeResult {
// 	toggleTheme: () => void;
// 	theme: Theme;
// }

// export function useFetch(url: string) {
// 	const [data, setData] = useState(null);
// 	const [error, setError] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);

// 	useEffect(async () => {
// 		try {
// 			setIsLoading(true);
// 			const response = await fetch(url);
// 			setData(response.data);
// 		} catch (error) {
// 			setError(error);
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	}, [url]);

// 	return [data, error, isLoading];
// }
