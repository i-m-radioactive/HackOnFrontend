import React, { useContext } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/authContext'
import { auth, signOut, GoogleAuthProvider, signInWithPopup } from '../firebase'
import { ErrorContext } from '../context/errorContext';
import ErrorHandling from '../components/ErrorHandling';
const Navbar = () => {

  const authContext = useAuth();
  const { error, show, setError, setShow } = useContext(ErrorContext);

  const GoogleLoginHandler = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setError(`Hi ${result.user.displayName.split(' ')[0]} 👋`);
        setShow(true);
      }).catch((error) => {
        setError(error.message);
        setShow(true);
      });
  }



  return (
    <>
      <div className="nav-wrapper">
        <div>
          <Link href="/" >HOME</Link>
        </div>
        <div className="login-logout">
          {authContext.user ? <button onClick={async () => {
            await signOut(auth);
          }} style={{ marginRight: "1rem" }}>Logout</button> : null}
          {authContext.user ? <Link href="/dashboard">DASHBOARD</Link> : <button onClick={GoogleLoginHandler}>Login</button>}
        </div>
      </div>
      <ErrorHandling setshow={setShow} show={show} >{error}</ErrorHandling>
    </>
  )
}

export default Navbar
