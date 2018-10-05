import { createSelector, createStructuredSelector } from 'reselect';
import { prop } from 'ramda';
import { selectShows, selectIsShowsLoading } from '../../global/shows/selectors';
import { makeSelectRouteParams } from '../../router/selectors';
import { selectEpisodes, selectIsEpisodesLoading } from '../../global/episodes/selectors';

const getGenres = prop('genres');

const findItemInListById = (id, list) => list && list.find((item) => String(item.id) === id);

const selectSelectedShow = createSelector(
  selectShows,
  selectEpisodes,
  makeSelectRouteParams(),
  (shows, episodes, routeParams) => {
    if (routeParams.episodeId) {
      return episodes ? findItemInListById(routeParams.episodeId, episodes) : {};
    }
    return findItemInListById(routeParams.id, shows);
  }
);

const selectGenres = createSelector(selectSelectedShow, (item) => {
  const genres = getGenres(item);
  return Array.isArray(genres) ? genres : null;
});

export default createStructuredSelector({
  item: selectSelectedShow,
  genres: selectGenres,
  episodes: selectEpisodes,
  isShowsLoading: selectIsShowsLoading,
  isEpisodesLoading: selectIsEpisodesLoading,
});
