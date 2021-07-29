import '../styles/globals.scss'
import React from 'react'
import ErrorContextProvider from "../context/errorContext";
import { AuthProvider } from "../context/authContext";



function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ErrorContextProvider>
        <Component {...pageProps} />
      </ErrorContextProvider>
    </AuthProvider>
  )
}

export default MyApp
