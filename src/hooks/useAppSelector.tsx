import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../reducers/stores';

// Use throughout your app instead of plain `useSelector` 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
