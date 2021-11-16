import React from 'react'
import { ItemCount } from '../ItemCount.js/ItemCount'
import { ProductCard } from '../ProductCard/ProductCard'
import img_plantas from "../../assets/img_plantas/sansevieria.jpg";
import { Container } from 'react-bootstrap'





export const ItemListContainer = ( {greeting}) => {

    return (
        <Container>
            <h2>{greeting}</h2>
            <hr/>  

            <Container className="cards">
                <ProductCard img={img_plantas} name="Sansevieria" />
                <ProductCard img={img_plantas} name="Sansevieria" />
                <ProductCard img={img_plantas} name="Sansevieria" />
            </Container>  
        </Container>
    )
}
