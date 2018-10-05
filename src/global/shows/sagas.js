import { call, takeLatest, put, fork, join } from 'redux-saga/effects';
import { LOAD_SHOWS } from './constants';
import { fetchShow } from '../../services/shows';
import { loadShowsSuccess } from './actions';
import { forkAllSagas } from '../../utils/internal/sagaHelpers';

export function* generateForkedCall(apiCall, ids) {
  // eslint-disable-next-line func-names
  return yield ids.map(function*(id) {
    return yield fork(apiCall, id);
  });
}

function* handleLoadShows({ payload }) {
  const forkedCalls = yield call(generateForkedCall, fetchShow, payload.ids);
  let responses = yield join(...forkedCalls);
  responses = Array.isArray(responses) ? responses : [responses];
  yield put(loadShowsSuccess(responses));
}

function* watchForLoadingShows() {
  yield takeLatest(LOAD_SHOWS, handleLoadShows);
}

export default forkAllSagas([watchForLoadingShows]);
