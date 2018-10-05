import { createSelector } from 'reselect';

export const selectShowsDomain = ({ shows }) => shows;
export const selectShows = createSelector(selectShowsDomain, ({ data }) => data);
export const selectIsShowsLoading = createSelector(selectShowsDomain, ({ isLoading }) => isLoading);
