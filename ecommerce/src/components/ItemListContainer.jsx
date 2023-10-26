import  Container  from "react-bootstrap/Container"


export const ItemListContainer= (props)=>{

    return(
        <Container className="mt-5">

            <div>{props.greeting}</div>
        </Container>
    )
}