import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entitie/Counter';
import { userReducer } from 'entitie/User';
import { loginReducer } from 'features/AuthByUsername';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		counter: counterReducer,
		user: userReducer,
		loginForm: loginReducer,
	};

	return configureStore<StateSchema>({
		reducer: rootReducers,
		// devTools: __IS_DEV__,
		preloadedState: initialState,
	});
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
