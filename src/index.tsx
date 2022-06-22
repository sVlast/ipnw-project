import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAolD7JUyupm520iVKc3k3dOv6aDG8rHqU',

  authDomain: 'ipnw-project.firebaseapp.com',

  projectId: 'ipnw-project',

  storageBucket: 'ipnw-project.appspot.com',

  messagingSenderId: '891927753831',

  appId: '1:891927753831:web:7c59c438509de15295d0c2',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
