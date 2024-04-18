import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (
	children: any,
	state: DeepPartial<StateSchema>,
) => {
	return <StoreProvider initialState={state}>{children}</StoreProvider>;
};
