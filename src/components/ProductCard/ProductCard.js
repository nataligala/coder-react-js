import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ItemCount } from '../ItemCount.js/ItemCount';


export const ProductCard = ( {img, name, stock}) => {
    return (    
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                    </Card.Body>
                    <ItemCount stock="5" />
                </Card> 
    )
}
