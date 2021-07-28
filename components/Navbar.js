import React from 'react'
import styleNavbar from '../styles/navbar.module.scss'
import Link from 'next/link'
import { Button, ButtonGroup } from "@chakra-ui/react"
import firebase from '../firebase.js';
import { useRouter } from 'next/router'

const Navbar = () => {

  const router = useRouter()

  return (
    <nav className={styleNavbar.nav}>
      <a><Link href="/">Home</Link></a>
      { (router.pathname !== '/dashboard') && <a><Link href="/login">Login</Link></a>}
      <a><Link href="/dashboard">Dashboard</Link></a>
      {
        (router.pathname === '/dashboard') && <Button colorScheme="blue" onClick={async () => {
          await firebase.auth().signOut();
          window.location.href = "/login";
        }} > Logout </Button>
      }
    </nav>
  )
}

export default Navbar
