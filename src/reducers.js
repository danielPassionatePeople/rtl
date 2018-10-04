/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in configureStore.js, reducers wouldn't be hot reloadable.
 */

import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import history from './router/history';
import appReducer from './containers/App/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  const reducers = combineReducers({
    app: appReducer,
    ...asyncReducers,
  });
  // TODO possible improvement, move it as a 'withReducer' in the App container
  return connectRouter(history)(reducers);
}
