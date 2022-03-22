import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/sagaInfo";
import { newsReducer } from "./reducers/newsReducer";

//middleware
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterReducer,
  news: newsReducer,
});

const configureStore = (preloadedState: any) =>
  createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

const store = configureStore({});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
