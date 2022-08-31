import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl7gimo6j850y01ulavzvav7x/master',
  cache: new InMemoryCache()
})