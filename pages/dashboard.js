import React from 'react'
import Layout from '../components/Layout'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import nookies from 'nookies';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  RadioGroup,
  HStack,
  Radio,
  Select
} from "@chakra-ui/react"

import Dashboard from '../components/Dashboard'



const dashboard = ({ profile }) => {
  return (
    <Layout>
      <Dashboard user={profile.user} />
    </Layout>
  )
}

export async function getServerSideProps(context) {



  if (context.req.cookies.token === "") {

    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  } else {
    const GET_PROFILE = gql`
  {
      user{
        _id
        name
        email
        phone
        pincode
        address
        city
        state
        role
      }
    }
  `;

    const client = new ApolloClient({
      uri: 'http://localhost:1337/mutation',
      cache: new InMemoryCache(),
      headers: {
        authentication: nookies.get(context).token
      },
    })

    const { data } = await client.query({ query: GET_PROFILE });

    return {
      props: { profile: data }
    }
  }

  return {
    props: {}
  }

}

export default dashboard;
