import Cart from '../assets/46297.png';
import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget=()=>{
    const { items } = useContext(CartContext);
    const total = items.reduce(
        (acumulador, valorActual)=> acumulador + valorActual.quantity,
    0
    );
    return(
    <Link to="/cart">
        <img src={Cart} alt="Imagen" width="40" height="40"></img>
        <span style={{color:'#4f4c4c', padding:'5px', 'font-family': 'Lato'}}>{total}</span>
    </Link>
    );
};