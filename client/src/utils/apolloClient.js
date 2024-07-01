import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NODE_ENV === 'production' 
       ? 'https://bookfinder-graphql.onrender.com/' 
       : 'http://localhost:10000/graphql', // Ensure this matches your deployed URL
  cache: new InMemoryCache(),
});

export default client;
