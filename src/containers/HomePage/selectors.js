import { createStructuredSelector } from 'reselect';
import { selectShows } from '../../global/shows/selectors';

export default createStructuredSelector({
  shows: selectShows,
});
