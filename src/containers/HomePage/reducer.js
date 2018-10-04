import { LOAD_SHOWS_PAGE, LOAD_SHOWS_PAGE_SUCCESS, LOAD_SHOWS_PAGE_FAIL } from './constants';

const initialState = {
  isLoading: false,
  shows: null,
};

export default function epgReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SHOWS_PAGE:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SHOWS_PAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        shows: payload.shows,
      };
    case LOAD_SHOWS_PAGE_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
