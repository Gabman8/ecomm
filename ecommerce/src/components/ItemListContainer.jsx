 import  Container  from "react-bootstrap/Container"
 import { useParams } from "react-router"
import React,{useEffect,useState} from "react"

import { ItemList } from "./ItemList"
import {
    getFirestore, 
    collection,
    getDocs,
    query,
    where,
    doc} from "firebase/firestore";
export const ItemListContainer= (props)=>{

    const value=useState();

    const[items,setItems]= useState([]);
    const {id}= useParams();

    useEffect (()=>{
        const db =getFirestore();
        
        const refCollection= !id ? collection(db,"items") :
            query(collection(db,"items"),where("categoryId", "==", id));
        getDocs(refCollection).then((snapshot)=>{
            if(snapshot.size===0)console.log("sin resultados");
            else
                setItems(
                    snapshot.docs.map((doc)=>{

                        return {id:doc.id,...doc.data()};
                    })
                )
        })
    },[id])
    return(
        <Container className="mt-5">

            <div>{props.greeting}</div>
            <ItemList items={items}/>
        </Container>
    )
}