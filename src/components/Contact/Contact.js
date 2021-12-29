import React, { useState } from 'react';
import './Contact.css';
import logoBanner from '../../../src/assets/img_banner/banner_contacto.jpg'
import { Container, Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

export const Contact = () => {


    const [values, setValues] = useState({

        name: '',
        lastname: '',
        email:'',
    })

    const handleInputChange = (e) =>{
        console.log(e.target.value)
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()

        console.log(values)
    }




    return (
        <Container className="form" style={{ backgroundImage: `url(${logoBanner})` }}>
            <hr/> 
            <h2>Contacto</h2>
            <Form className="form__container" onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    name="name"
                    value={values.name} 
                    className="form-control my-2"
                    type="text"
                    placeholder="Nombre"
                />
                <input 
                    onChange={handleInputChange}
                    name="lastname"
                    value={values.lastname} 
                    className="form-control my-2"
                    type="text"
                    placeholder="Apellido"
                /> 
                <input
                    onChange={handleInputChange}
                    name="email"
                    value={values.email}  
                    className="form-control my-2"
                    type="email"
                    placeholder="Ejemplo: hola@floresbabel.com"
                /> 

                <Button type="submit" className="btn btn-primary">Enviar</Button>    
            </Form>
    
        </Container>
    )
}
