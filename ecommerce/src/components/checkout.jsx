import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
    getFirestore,
    collection,
    addDoc

} from 'firebase/firestore';

const initialValue={

    email:"",
    contraseña:"",
    direccion:"",
    ciudad:"",
    codigo:""

}

function Checkout() {
const {clear,items}= useContext(CartContext);
const [buyer, setBuyer] = useState(initialValue);
const handleChange=(event)=>{

    setBuyer(buyer =>{

        return{
            ...buyer,
            [event.target.name]:event.target.value,
        }
    });
};

const sendOrder=()=>{
    const order = {
        buyer:buyer,
        items:items,
        total:items.length,
    };
    const db =getFirestore();
    const orderCollection = collection(db,"orders");

    addDoc(orderCollection,order).then(({id})=>{

        if(id){
            setBuyer(initialValue);
            clear();
        }
    })
}
return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={buyer.email} name='email' onChange={handleChange} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control  value={buyer.contraseña} name='contraseña' onChange={handleChange} type="password" placeholder="introduce contraseña" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Direccion</Form.Label>
        <Form.Control value={buyer.direccion} name='direccion' onChange={handleChange}  placeholder="calle de la constitucion" />
      </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control value={buyer.ciudad}  name='ciudad' onChange={handleChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Codigo postal</Form.Label>
          <Form.Control  value={buyer.codigo}   name='codigo' onChange={handleChange}/>
        </Form.Group>
      </Row>
      <Button variant="primary" onClick={sendOrder}>
        Submit
      </Button>
    </Form>
  );
}

export default Checkout;