 import  Container  from "react-bootstrap/Container"
 import { useParams } from "react-router"
import React,{useEffect,useState} from "react"
import { ItemList } from "./ItemList"
import { ItemDetail } from "./ItemDetail"
import {
    getFirestore, 
    getDoc,
    doc} from "firebase/firestore";


export const ItemDetailContainer= ()=>{

    const[item,setItem]= useState(null);
    const {id}= useParams();

    useEffect (()=>{

        const db =getFirestore();
        const refDoc=doc(db,"items",id);
        getDoc(refDoc).then((snapshot)=>{

            setItem({id: snapshot.id,...snapshot.data()});
        })
    },[id]);

    return(
        <Container className="mt-5">
          {item ? <ItemDetail item={item} />: <div>Loading...</div> } 
        </Container>
    )
}