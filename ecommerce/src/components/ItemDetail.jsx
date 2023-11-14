import React from "react";
export const ItemDetail=({item})=>{

    return(
    <> 
    <h1>{item.title}</h1>
    <img width="1000" height="500" src={item.pictureUrl}></img>
    <p>{item.description}</p>
    <p>{item.price}€</p>
    </>
    

    );
}