import React, {useContext, useState} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Navigate } from 'react-router'
import { validarDatos } from '../../helpers/validarDatos'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

    const {cart, emptyCart, totalCompra} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email:''
    })
    

    const handleInputChange = (e) => {

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!validarDatos(values)) { return }
        
        generarOrden(values, cart, emptyCart, totalCompra)
    }



    return (

        <>
            {cart.length === 0 
                ? <Navigate to="/"/>
                :
                    <Container>
                        <h2>Resumen de compra</h2>
                        <hr/>

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
            }       
        </>
    )
}
