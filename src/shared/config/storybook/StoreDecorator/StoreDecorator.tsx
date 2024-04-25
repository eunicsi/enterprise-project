import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entitie/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
};

export const StoreDecorator = (
	children: any,
	state: DeepPartial<StateSchema>,
	asyncReducers?: ReducersList,
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
