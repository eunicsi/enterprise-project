import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => {
	return useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
};
