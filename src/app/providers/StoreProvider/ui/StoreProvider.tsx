import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
	children?: React.ReactNode;
	initialState?: DeepPartial<StateSchema>;
}

const StoreProvider = (props: StoreProviderProps) => {
	const { children, initialState } = props;

	const store = createReduxStore(initialState as StateSchema);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
