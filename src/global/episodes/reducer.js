import { LOAD_EPISODES, LOAD_EPISODES_SUCCESS, LOAD_EPISODES_FAIL } from './constants';

export const initialState = {
  isLoading: false,
  data: [],
};

export default function episodesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOAD_EPISODES:
      return {
        ...state,
        isLoading: true,
        data: [],
      };
    case LOAD_EPISODES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: payload.episodes,
      };
    case LOAD_EPISODES_FAIL:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
