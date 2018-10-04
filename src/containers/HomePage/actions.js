import { LOAD_SHOWS_PAGE, LOAD_SHOWS_PAGE_SUCCESS } from './constants';

export function loadShowPage(ids) {
  return {
    type: LOAD_SHOWS_PAGE,
    payload: {
      ids,
    },
  };
}

export function loadShowPageSuccess(shows) {
  return {
    type: LOAD_SHOWS_PAGE_SUCCESS,
    payload: {
      shows,
    },
  };
}
