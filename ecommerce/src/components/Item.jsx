import Card from 'react-bootstrap/Card';
import  Button  from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import React from "react";

export const Item=({item})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureUrl} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <p>{item.price}€ </p>
                    {item.description}
                </Card.Text>
                <Link to={`/item/${item.id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
)
}