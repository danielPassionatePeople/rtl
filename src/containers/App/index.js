import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import styled from 'styled-components';
import { mapDispatchers } from '../../utils/internal/redux-utils';
import { SHOW_IDS_LIST } from '../../global/shows/constants';
import { loadShows } from '../../global/shows/actions';
import { HOMEPAGE_ROUTE } from '../../router/constants';
import browserHistory from '../../router/history';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  padding: 10px 20px;
  z-index: 100;
`;

export class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const children = React.Children.toArray(this.props.children);
    return (
      <div>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RTL_logo.svg/105px-RTL_logo.svg.png"
          onClick={() => browserHistory.push(HOMEPAGE_ROUTE)}
        />
        <Wrapper>
          <Switch>{children}</Switch>
        </Wrapper>
      </div>
    );
  }
}

const dispatchers = mapDispatchers({
  loadShows,
});

export default compose(
  withRouter,
  connect(
    undefined,
    dispatchers
  ),
  lifecycle({
    componentDidMount() {
      this.props.loadShows(SHOW_IDS_LIST);
    },
  })
)(App);
