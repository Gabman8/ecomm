import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
export const ItemCounter = ({onAdd,stock,initial}) => {
const [count,setCount]= useState(initial);

const handleIncreaseCount = () =>{
  if(stock>count){

    setCount((prev) => prev+1);

  }
};
const handleDecreaseCount = () =>{
  if(count > 1){

    setCount((prev) => prev-1);

  }
};

const handleAdd= ()=>{

  onAdd(count);
  setCount(initial);


}
  return (
    <>
    <br/>
    <br/>
    <div style={{display:"flex"}}>
      <div style={{fontSize: 30}} onClick={handleDecreaseCount}> -</div>
      <mark>{count}</mark>
      <div style={{fontSize: 30}} onClick={handleIncreaseCount}>+</div>
      <br/>
      <Button variant="primary" onClick={handleAdd}>Añadir al carrito</Button>
    </div>
    </>
  );
};
