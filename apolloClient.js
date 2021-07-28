import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const apollo = new ApolloClient({
    uri: 'http://localhost:1337/mutation',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export default apollo;