import { connect } from 'react-redux';
import compose from 'recompose/compose';
import lifecycle from 'recompose/lifecycle';
import { loadShowPage } from './actions';

import { mapDispatchers } from '../../utils/internal/redux-utils';
import HomePageComponent from './component';
import injectReducer from '../../utils/internal/injectReducer';
import injectSaga from '../../utils/internal/injectSaga';
import saga from './sagas';
import reducer from './reducer';
import { SHOW_IDS_LIST } from './constants';
import homeConnector from './selectors';

const dispatchers = mapDispatchers({
  loadShowPage,
});

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  connect(
    homeConnector,
    dispatchers
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadShowPage(SHOW_IDS_LIST);
    },
  })
)(HomePageComponent);
