import { createSelector, createStructuredSelector } from 'reselect';
import { selectShows } from '../../global/shows/selectors';
import { makeSelectRouteParams } from '../../router/selectors';

const selectSelectedShow = createSelector(
  selectShows,
  makeSelectRouteParams(),
  (shows, routeParams) => (shows ? shows.find((show) => String(show.id) === routeParams.id) : null)
);

// Just to make the code cleaner when rendering it in the component
const selectGenres = createSelector(selectSelectedShow, ({ genres }) => (Array.isArray(genres) ? genres : [genres]));

export default createStructuredSelector({
  show: selectSelectedShow,
  genres: selectGenres,
});
