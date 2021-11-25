import React from 'react';
import './Contact.css';
import logoBanner from '../../../src/assets/img_banner/banner_contacto.jpg'
import { Container, Form } from 'react-bootstrap';

export const Contact = () => {


    return (
        <Container>
            <hr/> 
            <h2>Contacto</h2>
            <Form>
                <img src={logoBanner} alt="logo babel" className="form"/>
            </Form>
    
        </Container>
    )
}
