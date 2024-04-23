import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
	loginForm: loginReducer,
};

export const StoreDecorator = (
	children: any,
	state: DeepPartial<StateSchema>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => {
	return (
		<StoreProvider
			asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			initialState={state}
		>
			{children}
		</StoreProvider>
	);
};
