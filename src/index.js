import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// cart test
window.addEventListener('keydown', e => {
  if(e.key === 'q'){
    console.log('localStorage.cart:', localStorage.cart);
  }
})