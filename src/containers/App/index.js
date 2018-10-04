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

export class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const children = React.Children.toArray(this.props.children);
    return (
      <div>
        <Wrapper>
          <Switch>{children}</Switch>
        </Wrapper>
      </div>
    );
  }
}

export default compose(withRouter)(App);
