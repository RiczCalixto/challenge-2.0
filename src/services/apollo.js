import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RetryLink } from 'apollo-link-retry';

const requestLink = createHttpLink({ uri: 'https://graphql-pokemon.now.sh/' });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const retryLink = new RetryLink({
  max: 10,
  delay: 5000,
  interval: (delay, count) => (count > 5 ? 1000 : delay),
});

const link = errorLink.concat(requestLink, retryLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
