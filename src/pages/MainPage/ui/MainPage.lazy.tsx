import { lazy } from "react";

export const MainPageLazy = lazy(() => { return import("./MainPage"); });
