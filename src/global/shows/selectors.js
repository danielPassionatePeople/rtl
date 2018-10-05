import { createSelector } from 'reselect';

export const selectShowsDomain = ({ shows }) => shows;
export const selectShows = createSelector(selectShowsDomain, (shows) => shows.data);
