import React from 'react';
import ReactDOM from 'react-dom/client';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';
import OrderSuccess from './components/Success';
import ProductAdd from './components/ProductAdd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Login" element={<Login/>} />
    <Route path="/Register" element={<Register/>} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/About" element={<About/>} />
    <Route path="/Products" element={<Products />} />
    <Route path="/SingleProduct" element={<SingleProduct />} />
    <Route path="/Success" element={<OrderSuccess />} />
    <Route path="/AddProduct" element={<ProductAdd />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
