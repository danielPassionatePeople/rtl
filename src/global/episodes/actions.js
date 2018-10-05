import { LOAD_EPISODES, LOAD_EPISODES_SUCCESS } from './constants';

export function loadEpisodes(id) {
  return {
    type: LOAD_EPISODES,
    payload: {
      id,
    },
  };
}

export function loadEpisodesSuccess(episodes) {
  return {
    type: LOAD_EPISODES_SUCCESS,
    payload: {
      episodes,
    },
  };
}
