import { createStore, compose } from "redux";
import reducer from "./reducers/counterReducer";

//middleware
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState: any) =>
  createStore(reducer, preloadedState, composeEnhancers());
const store = configureStore({});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
