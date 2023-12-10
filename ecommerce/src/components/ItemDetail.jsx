import React from "react";
import { ItemCounter } from "./ItemCounter";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export const ItemDetail = ({ item }) => {

    const{ onAdd }=useContext(CartContext);
    const add=(quantity)=>{

        onAdd(item,quantity);
    };
  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} width="500px"></img>
      <p style={{textAlign:'justify', overflow: 'hidden'}}>{item.description}</p>
      <p>{item.price}€</p>
      <p2> Stock: {item.stock}</p2>
      <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
    </div>
  );
};
