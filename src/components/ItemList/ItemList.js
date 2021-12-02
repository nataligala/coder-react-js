// Acá van a recibir productos por propiedades y 

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Item } from '../Item/Item'; 
import './ItemList.css';

export const ItemList = ( {productos}) => {

    return (
        <Container>
            <hr/>
            <h2>Tienda</h2>
            <Row>
                {productos.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )

}

