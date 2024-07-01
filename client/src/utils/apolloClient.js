import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' ? 'https://bookfinder-graphql.onrender.com/' : 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});

export default client;
