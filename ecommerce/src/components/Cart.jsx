import { Container } from "reactstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router";

export const Cart=()=>{

    const {clear,items,onRemove}= useContext(CartContext);
    const navigate = useNavigate();
    if(!items.length){

        return(

        <Container className="mt-5">
            <>Carrito vacío</>
            <button onClick={()=> navigate("/")}>Ir a home</button>
        </Container>
        )
       
    }
    return(
        <Container className="mt-5">
        <h1>Cart</h1>
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Title</th>
                <th>price</th>
                <th>stock</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
            {items?.map((item)=>(
                <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                    <td><img src={item.pictureUrl} width="300"></img></td>
                    <td onClick={()=>onRemove(item.id)}>X</td>
               </tr>
            ))}
            </tbody>
            </Table>              
            <button onClick={clear}>Vaciar carrito</button>
            <button onClick={()=> navigate("/checkout")}>Checkout</button>
            </Container>
    );
}

    
