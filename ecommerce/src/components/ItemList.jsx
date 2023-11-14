import React from "react"
import CardGroup from 'react-bootstrap/CardGroup';
import { Item } from "./Item"

export const ItemList = ({items})=>{

    return(
        <CardGroup>
            {items.map(item => <Item key={item.id} item={item}/>)}
        </CardGroup>
        )
}