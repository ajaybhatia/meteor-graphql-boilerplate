/** @namespace Client */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { meteorClientConfig } from 'meteor/apollo';
import { ApolloProvider } from 'react-apollo';

import Routes from './routes.jsx';

const networkInterface = createNetworkInterface({
  uri: Meteor.absoluteUrl('graphql'),
  useMeteorAccounts: true,
  batchingInterface: true,
  batchInterval: 10
})

const client = new ApolloClient(meteorClientConfig({ networkInterface }));

const App = () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
