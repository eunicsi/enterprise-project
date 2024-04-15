import "./styles/index.scss";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { classNames } from "../shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
	const { theme } = useTheme();

	return (
		<div className={classNames("app", {}, [theme])}>
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
