import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import Products from './components/Products/Index';


ReactDOM.render(
  <React.StrictMode>
   <Navbar />
   {/* <Home /> */}
   <Products />
   <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
