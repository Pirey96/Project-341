import React, {useState} from 'react';
import './App.css';
import { Login } from './Login/Login.js';
import { Main } from './Main';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import * as firebaseConfig from './firebase.config.js';

const App = () => {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className="App">
      <Main> </Main>
    </div>
  );
}
export default App;