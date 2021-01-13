import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules/rootReducer";
import rootSaga    from "./modules/rootSaga";

import { CategoriesState } from './modules/categories/Categories.types';
import { JokeState }       from './modules/joke/Joke.types';

export interface ApplicationState {
  categories: CategoriesState
  joke: JokeState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
