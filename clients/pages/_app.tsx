import type { AppProps } from "next/app";
import TestApolloProvider from "../graphql/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TestApolloProvider>
      <Component {...pageProps} />
    </TestApolloProvider>
  );
}

export default MyApp;
