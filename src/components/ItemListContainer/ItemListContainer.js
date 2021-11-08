import React from 'react'
import { Container } from 'react-bootstrap'




export const ItemListContainer = ( {greeting}) => {

    return (
        <Container>
            <h2>{greeting}</h2>
            <hr/>        
        </Container>
    )
}
