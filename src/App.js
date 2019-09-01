import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyles from './globalStyles';
import AppRouter from './routes';
import client from './services/apollo';

const App = () => (
  <>
    <GlobalStyles />
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  </>
);

export default App;
