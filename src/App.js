import './App.css';
import {getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from './firebase/firebase.init'
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] =useState({});
  const githubProvider = new GithubAuthProvider();
  const [guser, setGuser] =useState({});

  const handleGoogleSignIn = () =>
    signInWithPopup (auth, googleProvider)
     .then((result) => {
       const user =(result.user);
       console.log(user);
       setUser(user);
     })
     .catch(error => 
      console.error(error));

  const handleGithubSignIn =() =>
      signInWithPopup (auth, githubProvider)
       .then((result) => {
        const guser = (result.user);
        console.log(guser);
        setGuser(guser);
       })
  return (
    <div className="App">
      <div className='google-auth'>
        <button onClick={handleGoogleSignIn}>Sign In with Google</button>
        <div>
          <img src={user.photoURL} alt=''/>
          <h2>User : {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <p>User ID : {user.uid}</p>
        </div>
      </div>
      <div className='git-auth'>
        <button onClick={handleGithubSignIn}>Sign In with Github</button>
        <div>
          <img src={guser.photoURL} alt=''/>
          <h2>User : {guser.displayName}</h2>
          <p>Email : {guser.email}</p>
          <p>User ID : {guser.uid}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
