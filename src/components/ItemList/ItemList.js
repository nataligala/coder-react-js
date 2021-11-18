// Acá van a recibir productos por propiedades y 

import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount.js/ItemCount'; 
import './ItemList.css';

export const ItemList = ( {productos}) => {

    return (
        <Container> 
            <h2>Productos</h2>
            <hr/>

            {productos.map((prod)=> (
                <Container className="cards">
                    <Card key={prod.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={prod.img} alt={prod.name}/>
                        <Card.Body>
                            <Card.Title>{prod.name}</Card.Title>
                            <Card.Text>Precio: ${prod.price}</Card.Text>
                            <Card.Text>{prod.origin}</Card.Text>
                        </Card.Body>
                        <ItemCount stock="5" />
                    </Card>
                </Container>

            ))}
        </Container>
    )

}

