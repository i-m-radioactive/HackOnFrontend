import React from 'react'
import Nav from '../components/Navbar'
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="layout-wrapper"> {children}</main>
    </>
  )
}

export default Layout
