import React from 'react';
import { withRouter, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: block;
  width: 100%;
  min-height: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const Logo = styled.img`
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
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/RTL_logo.svg/105px-RTL_logo.svg.png" />
        <Wrapper>
          <Switch>{children}</Switch>
        </Wrapper>
      </div>
    );
  }
}

export default compose(withRouter)(App);
