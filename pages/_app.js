import '../styles/globals.scss'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from "../authContext";
import { ApolloProvider } from '@apollo/client'
import client from '../apolloClient'


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
