import { LOAD_SHOWS, LOAD_SHOWS_SUCCESS, LOAD_SHOWS_FAIL } from './constants';

export const initialState = {
  isLoading: false,
  data: null,
};

export default function showsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_SHOWS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.shows,
      };
    case LOAD_SHOWS_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
