import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class NotFound extends Component {
  state = {}

  render() {
    return (
      <h2 className="not-found">
        Find me in app/imports/ui/pages/not-found/not-found
      </h2>
    );
  }
}

export { NotFound };
