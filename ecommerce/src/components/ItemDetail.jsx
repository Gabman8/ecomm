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
    <>
      <h1>{item.title}</h1>
      <img width="1000" height="500" src={item.pictureUrl}></img>
      <p>{item.description}</p>
      <p>{item.price}€</p>
      <p2> Stock: {item.stock}</p2>
      <ItemCounter onAdd={add} stock={item.stock} initial={1}/>
    </>
  );
};
