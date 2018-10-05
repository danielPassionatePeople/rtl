import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import HomePageComponent from './component';
import homeConnector from './selectors';
import browserHistory from '../../router/history';
import { DETAILS_PAGE } from '../../router/constants';

export default compose(
  connect(homeConnector),
  withHandlers({
    onClickShow: () => (id) => {
      browserHistory.push(`${DETAILS_PAGE}/${id}`);
    },
  })
)(HomePageComponent);
