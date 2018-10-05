import { all } from 'redux-saga/effects';
import showsSaga from './global/shows/sagas';
import episodesSaga from './global/episodes/sagas';

// Insert new async saga here
function* rootSaga() {
  yield all([showsSaga, episodesSaga]);
}

export default rootSaga;
