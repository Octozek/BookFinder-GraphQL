import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production'
    ? 'https://your-deployed-url.com/graphql' // Ensure this is the correct URL
    : 'http://localhost:3001/graphql', // Local development URL
  cache: new InMemoryCache(),
});

export default client;
