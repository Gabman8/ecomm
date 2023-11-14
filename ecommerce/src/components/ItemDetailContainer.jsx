 import  Container  from "react-bootstrap/Container"
 import { useParams } from "react-router"
import React,{useEffect,useState} from "react"
import { products } from "../data/products"
import { ItemList } from "./ItemList"
import { ItemDetail } from "./ItemDetail"


export const ItemDetailContainer= ()=>{

    const[item,setItem]= useState(null);
    const {id}= useParams();
    useEffect(()=>{
        const mypromise=new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products);
            }, 2000);
        });
        mypromise.then((response)=>{
            const findById= response.find((item)=> item.id===Number(id));
            setItem(findById);
        });

    },[id]);
    return(
        <Container className="mt-5">
          {item ? <ItemDetail item={item} />: <div>Loading...</div> } 
        </Container>
    )
}