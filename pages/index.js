import React from 'react'
import Layout from '../components/Layout'
import Index from '../components/Index'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'


const index = ({ post }) => {
  return (
    <Layout>
      <Index posts={post} />
    </Layout>
  )
}

export async function getServerSideProps(context) {

  const GET_POST = gql`
    {
      posts{
        _id
        name
        category
        description
        content{
          detail
          qty
        }
        createdBy
        vlt{
          pincode
          city
          state
        }
      }
    }
  `;

  const client = new ApolloClient({
    uri: 'http://localhost:1337/query',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({ query: GET_POST });
  // console.log(data);
  return {
    props: { post: data }
  }

  return {
    props: {}
  }

}

export default index;
