import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends Component {
  state = {}

  render() {
    return (
      <h2 className="home">
        Find me in app/imports/ui/pages/home/home
      </h2>
    );
  }
}

export { Home };
