import React from 'react';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Product from './Pages/Product';
import ProductList from './Pages/ProductList';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import {
  BrowserRouter,
   Route, Routes,Navigate
} from "react-router-dom";


const App = () => {

  const user = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/> } />
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/> } />
      </Routes>

    </BrowserRouter>

  );
};

export default App;
