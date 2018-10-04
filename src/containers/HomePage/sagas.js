import { call, takeLatest, put } from 'redux-saga/effects';
import { LOAD_SHOWS_PAGE } from './constants';
import { fetchShow } from '../../services/shows';
import { loadShowPageSuccess } from './actions';

function* handleLoadShow({ payload }) {
  const shows = yield call(fetchShow, payload.ids);
  yield put(loadShowPageSuccess(shows));
}

export default function*() {
  yield takeLatest(LOAD_SHOWS_PAGE, handleLoadShow);
}
