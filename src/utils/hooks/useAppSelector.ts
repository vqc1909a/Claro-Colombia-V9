import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootReducerState } from 'redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppSelector: TypedUseSelectorHook<RootReducerState> = useSelector;
export default useAppSelector;