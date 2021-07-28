import React, { useEffect } from 'react'
import Logins from '../components/Login'
import nookies from 'nookies'
import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'
import firebase from '../firebase.js';


export async function getServerSideProps(context) {

  const cookies = nookies.get(context);

  if (cookies.token !== "") {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false
      }
    }
  }

  // if (await firebase.auth().currentUser) {
  //   return {
  //     props:{
  //       user:firebase.auth().
  //     }
  //   }
  // }

  return {
    props: {}
  }

}

const Login = () => {

  return (
    <Layout>
      <Logins />
    </Layout>
  )
}

export default Login
