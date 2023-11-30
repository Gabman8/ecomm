import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

const firebaseConfig = {
  apiKey: "AIzaSyCSOXUm-M1HjiHFyr4u7gscBIFDzqTaOmg",
  authDomain: "ecommerce-e7271.firebaseapp.com",
  projectId: "ecommerce-e7271",
  storageBucket: "ecommerce-e7271.appspot.com",
  messagingSenderId: "438471798580",
  appId: "1:438471798580:web:b8632f6ac99ff7f9ecbf61"
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
