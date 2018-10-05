import showsReducer, { initialState } from '../reducer';
import { loadShows, loadShowsSuccess, loadShowsFail } from '../actions';

describe('shows reducer', () => {
  it('should create the expected initial state', () => {
    expect(
      showsReducer(undefined, {
        isLoading: false,
        data: null,
      })
    ).toEqual(initialState);
  });
  describe('loadShows', () => {
    it('should set isLoading to true ', () => {
      expect(showsReducer(initialState, loadShows)).toEqual({
        ...initialState,
        isLoading: true,
      });
    });
  });
  describe('loadShowsSuccess', () => {
    it('should set isLoading to false and set the data to the value of the payload  ', () => {
      const payload = {
        shows: [],
      };
      expect(showsReducer(initialState, loadShowsSuccess(payload))).toEqual({
        ...initialState,
        shows: [],
      });
    });
  });
  describe('loadShowsFail', () => {
    it('should set isLoading to false', () => {
      expect(showsReducer(initialState, loadShowsFail)).toEqual({
        ...initialState,
        isLoading: false,
      });
    });
  });
});
