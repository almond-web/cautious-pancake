import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// let userData = [{name:'Ira', id:'1'},{name:'Marina', id:'2'},{name:'Sveta', id:'3'}]
// let messageData = [{message:'Hi!', id:'1'},{message:'Hi! How are you?', id:'2'},{message:'Fine, thanks.', id:'3'}]
// let postData = [{id:1, message:'My first post', likes: '10'}, {id:2, message:'My second post', likes: '5'}]
// // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();