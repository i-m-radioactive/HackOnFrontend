import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const apollo = new ApolloClient({
    uri: 'https://https://arrow-level-raptor.glitch.me/mutation',
    cache: new InMemoryCache(),
    credentials: 'include'
})

export default apollo;