import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

// Create an HTTP link to your GraphQL server using the environment variable
const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URI,
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>
);
