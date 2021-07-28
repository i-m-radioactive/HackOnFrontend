import React from 'react'
import Navbar from './Navbar'
import styleLayout from '../styles/layout.module.scss'
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styleLayout.main}>
        {children}
      </main>
    </>
  )
}

export default Layout;
