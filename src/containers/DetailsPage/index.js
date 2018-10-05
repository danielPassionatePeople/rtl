import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { loadShows } from './actions';
// import { mapDispatchers } from '../../utils/internal/redux-utils';
import DetailsComponent from './component';
import detailsConnector from './selectors';

// const dispatchers = mapDispatchers({
//   loadShows,
// });

// const withReducer = injectReducer({ key: 'home', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  // withReducer,
  // withSaga,
  connect(
    detailsConnector,
    undefined
  )
)(DetailsComponent);
