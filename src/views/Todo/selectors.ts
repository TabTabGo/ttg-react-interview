import { RootState } from '../../reducers/rootReducers';

export const selectTodos = (state: RootState) => state.todo.current.tasks;
export const selectTheme = (state: RootState) => state.todo.current.theme;
