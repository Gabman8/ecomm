import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();
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
  
  if(buyer.email!=="" && buyer.contraseña!=="" && buyer.direccion!=="" 
  && buyer.ciudad!=="" &&  buyer.codigo!==""){

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
            navigate("/");
            
        }
    })
  }else{

    alert("Hay campos obligatorios sin completar")
  }
    
}
return (
    <Form style={{margin:'50px'}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email*</Form.Label>
          <Form.Control value={buyer.email} name='email' onChange={handleChange} type="email" placeholder="Introduce tu direccion de correo"  required/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña*</Form.Label>
          <Form.Control  value={buyer.contraseña} name='contraseña' onChange={handleChange} type="password" placeholder="Introduce contraseña"  required/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Direccion*</Form.Label>
        <Form.Control value={buyer.direccion} name='direccion' onChange={handleChange}  placeholder="Introduce tu calle"  required/>
      </Form.Group>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad*</Form.Label>
          <Form.Control value={buyer.ciudad}  name='ciudad'  placeholder="Introduce tu ciudad" onChange={handleChange}  required/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Codigo postal*</Form.Label>
          <Form.Control  value={buyer.codigo}   name='codigo' placeholder=" Introduce codigo postal" onChange={handleChange}  required/>
        </Form.Group>
      </Row>
      <Button variant="primary" onClick={sendOrder}>
        Submit
      </Button>
    </Form>
  );
}

export default Checkout;