import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// const sideMenu= document.querySelector("aside");
// const menuBtn= document.querySelector("#menu-btn");
// const closeBtn= document.querySelector("#close-btn");
// const themeToggler=  document.querySelector(".theme-toggler");



// //show sidebar
// menuBtn.addEventListener('click', ()=>{
//     sideMenu.style.display= 'block';
// })


// //close sidebar
// closeBtn.addEventListener('click', ()=>{
//     sideMenu.style.display= 'none';
// })


// //change-theme
// themeToggler.addEventListener('click', ()=>{
//     document.body.classList.toggle('dark-theme-varables');
//     themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
//     themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
// })




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
