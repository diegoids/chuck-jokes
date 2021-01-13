import { all, takeLatest } from "redux-saga/effects";

import { CategoriesTypes } from './categories/Categories.types';
import { loadCategories }  from './categories/Categories.sagas';

import { JokeTypes } from './joke/Joke.types';
import { loadJoke }  from './joke/Joke.sagas';

export default function* rootSaga() {
  yield all([
    takeLatest(CategoriesTypes.LOAD_REQUEST, loadCategories),
    takeLatest(JokeTypes.LOAD_JOKE_REQUEST, loadJoke)
  ])
}
