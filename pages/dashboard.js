import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useAuth } from '../context/authContext'
import Link from 'next/link'
import PostForm from '../components/PostForm';
import UserForm from '../components/UserForm';

const dashboard = () => {
  const [view, setView] = useState("UF");
  let component = null;
  const authContext = useAuth();
  useEffect(() => {
    setView("UF")

  }, [])

  if (view === "UF") {
    component = <UserForm />;
  } else if (view === "PF") {
    component = <PostForm />;
  }


  return (
    <Layout>
      {authContext.user ? <div className="dashboard-wrapper">
        <div className="switch-user">
          <button onClick={() => { setView("UF"); localStorage.setItem("view", "UF"); }}>Profile</button>
          <button onClick={() => { setView("PF"); localStorage.setItem("view", "PF"); }}>Create new post</button>
        </div>
        <div className="form">
          {component}
        </div>
      </div> : <div><h1>Please Login or Go <Link href="/">Home</Link></h1></div>}
    </Layout>
  )
}

export default dashboard
