import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../rootReducers';

const Store = (preLoadedState: any) => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    preLoadedState,
    composeEnhancers(applyMiddleware(thunk, createLogger()))
  );

  return store;
};


const State = Store({}).getState
export type RootState = ReturnType<typeof State>;
export default Store;


