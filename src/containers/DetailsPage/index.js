import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers, branch, renderComponent, mapProps } from 'recompose';

import { mapDispatchers } from '../../utils/internal/redux-utils';
import DetailsComponent from './component';
import detailsConnector from './selectors';
import { loadEpisodes } from '../../global/episodes/actions';
import { EPISODE_PAGE, DETAILS_PAGE } from '../../router/constants';
import browserHistory from '../../router/history';
import Loader from '../../components/Loader';

const dispatchers = mapDispatchers({
  loadEpisodes,
});

export default compose(
  mapProps(({ ...props }) => ({
    ...props,
    isEpisode: !!props.match.params.episodeId,
  })),
  connect(
    detailsConnector,
    dispatchers
  ),
  withHandlers({
    onClickEpisode: ({ match }) => ({ id: episodeId }) => {
      const { id } = match.params;
      browserHistory.push(`${DETAILS_PAGE}/${id}${EPISODE_PAGE}/${episodeId}`);
    },
  }),
  lifecycle({
    // TODO don't fetch two times the episodes if you already have them
    componentDidMount() {
      if (this.props.match.params.id) {
        this.props.loadEpisodes(this.props.match.params.id);
      }
    },
  }),
  branch(
    ({ isEpisodesLoading, isShowsLoading, item }) => isEpisodesLoading || isShowsLoading || !item,
    renderComponent(Loader),
    renderComponent(DetailsComponent)
  )
)();
