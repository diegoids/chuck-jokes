import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './Categories.actions';

export function* loadCategories() {
  try {
    const response = yield call( api.get, 'categories' );

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
