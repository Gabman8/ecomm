import {NavBar} from './components/NavBar';
import {ItemListContainer} from './components/ItemListContainer';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import React from 'react';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  return (
   
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer  greeting="Bienvenidos al Ecommerce"/>}/>
          <Route path="/category/:id" element={<ItemListContainer  greeting="Bienvenidos al Ecommerce"/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
