import { connect } from 'react-redux';
import { withHandlers, compose, branch, renderComponent } from 'recompose';
import HomePageComponent from './component';
import homeConnector from './selectors';
import browserHistory from '../../router/history';
import { DETAILS_PAGE } from '../../router/constants';
import Loader from '../../components/Loader';

export default compose(
  connect(homeConnector),
  withHandlers({
    onClickShow: () => (id) => {
      browserHistory.push(`${DETAILS_PAGE}/${id}`);
    },
  }),
  branch(({ isShowsLoading }) => isShowsLoading, renderComponent(Loader), renderComponent(HomePageComponent))
)();
