import { all } from 'redux-saga/effects';
import showsSaga from './global/shows/sagas';

// Insert new async saga here
function* rootSaga() {
  yield all([showsSaga]);
}

export default rootSaga;
