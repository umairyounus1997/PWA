import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then(() =>{
    return messaging.getToken()
  }).then((token)=>{
    console.log('token', token);
  })
  return (
    <div className="App">
      <h1> Hello World </h1>
    </div>
  );
}

export default App;
