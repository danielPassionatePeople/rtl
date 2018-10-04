import { createSelector, createStructuredSelector } from 'reselect';

export const selectHomeDomain = ({ home }) => home;
export const selectShows = createSelector(selectHomeDomain, (homeState) => homeState.shows);

export default createStructuredSelector({
  shows: selectShows,
});
