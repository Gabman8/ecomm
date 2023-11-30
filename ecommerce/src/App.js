import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import { Cart } from './components/Cart';
import Checkout from './components/checkout';


function App() {
  return (
   
    <>
      <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer  greeting="Bienvenidos al Ecommerce"/>}/>
          <Route path="/category/:id" element={<ItemListContainer  greeting="Bienvenidos al Ecommerce"/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      </CartProvider>
      
    </>
  );
}

export default App;
