import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './Joke.actions';
import { JokeProps } from './Joke.types';

export function* loadJoke({ payload }: JokeProps) {
  try {
    const response = yield call( api.get, `random?category=${payload}` );
    
    yield put(loadSuccess(response.data.value));
  } catch (err) {
    yield put(loadFailure());
  }
}
