import { LOAD_SHOWS, LOAD_SHOWS_SUCCESS } from './constants';

export function loadShows(ids) {
  return {
    type: LOAD_SHOWS,
    payload: {
      ids,
    },
  };
}

export function loadShowsSuccess(shows) {
  return {
    type: LOAD_SHOWS_SUCCESS,
    payload: {
      shows,
    },
  };
}
