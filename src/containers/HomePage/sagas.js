import { call, takeLatest, put, fork, join } from 'redux-saga/effects';
import { LOAD_SHOWS_PAGE } from './constants';
import { fetchShow } from '../../services/shows';
import { loadShowPageSuccess } from './actions';

export function* generateForkedCall(apiCall, ids) {
  // eslint-disable-next-line func-names
  return yield ids.map(function*(id) {
    return yield fork(apiCall, id);
  });
}

function* handleLoadShow({ payload }) {
  const forkedCalls = yield call(generateForkedCall, fetchShow, payload.ids);
  let responses = yield join(...forkedCalls);
  responses = Array.isArray(responses) ? responses : [responses];
  yield put(loadShowPageSuccess(responses));
}

export default function*() {
  yield takeLatest(LOAD_SHOWS_PAGE, handleLoadShow);
}
