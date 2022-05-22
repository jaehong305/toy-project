import '../styles/globals.css';
import { ApolloClient, InMemoryCache } from '@apollo/client';

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: '',
    cache: new InMemoryCache(),
  });

  return <Component {...pageProps} />;
}

export default MyApp;
