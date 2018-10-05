import episodesReducer, { initialState } from '../reducer';
import { loadEpisodes, loadEpisodesSuccess, loadEpisodesFail } from '../actions';

describe('shows reducer', () => {
  it('should create the expected initial state', () => {
    expect(
      episodesReducer(undefined, {
        isLoading: false,
        data: null,
      })
    ).toEqual(initialState);
  });
  describe('loadEpisodes', () => {
    it('should set isLoading to true ', () => {
      expect(episodesReducer(initialState, loadEpisodes())).toEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });
  describe('loadEpisodesSuccess', () => {
    it('should set isLoading to false and set the data to the value of the payload  ', () => {
      const payload = {
        episodes: [],
      };
      expect(episodesReducer(initialState, loadEpisodesSuccess(payload.episodes))).toEqual({
        ...initialState,
        isLoading: false,
        data: [],
      });
    });
  });
  describe('loadEpisodesFail', () => {
    it('should set isLoading to false', () => {
      expect(episodesReducer(initialState, loadEpisodesFail())).toEqual({
        ...initialState,
        isLoading: false,
      });
    });
  });
});
