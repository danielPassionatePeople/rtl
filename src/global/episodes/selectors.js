import { createSelector } from 'reselect';

export const selectEpisodesDomain = ({ episodes }) => episodes;
export const selectEpisodes = createSelector(selectEpisodesDomain, ({ data }) => data);
export const selectIsEpisodesLoading = createSelector(selectEpisodesDomain, ({ isLoading }) => isLoading);
