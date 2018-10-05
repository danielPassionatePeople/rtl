import { call, takeLatest, put } from 'redux-saga/effects';
import { LOAD_EPISODES } from './constants';
import { loadEpisodesSuccess } from './actions';
import { forkAllSagas } from '../../utils/internal/sagaHelpers';
import { fetchEpisodes } from '../../services/episodes';

function* handleFetchEpisodes({ payload }) {
  const episodes = yield call(fetchEpisodes, payload.id);
  yield put(loadEpisodesSuccess(episodes));
}

function* watchForFetchEpisodes() {
  yield takeLatest(LOAD_EPISODES, handleFetchEpisodes);
}

export default forkAllSagas([watchForFetchEpisodes]);
