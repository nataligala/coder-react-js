import React, {useContext, useState} from 'react'
import { Container, Button, Form } from 'react-bootstrap'
import { Navigate } from 'react-router'
import { validarDatos } from '../../helpers/validarDatos'
import { CartContext } from '../../context/CartContext'
import { db } from '../../firebase/config'
import { addDoc, collection, Timestamp } from 'firebase/firestore/lite'

export const Checkout = () => {

    const {cart, totalCompra} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email:''
    })
    

    const handleInputChange = (e) =>{

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!validarDatos(values)) { return }
        

        const orden = {
            buyer: {...values},
            items: cart,
            total: totalCompra(),
            date: Timestamp.fromDate ( new Date())
    
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, orden)
            .then((res) => {
                console.log(res.id)
            })

        console.log(orden)

    }



    return (

        <>
            {cart.lenght === 0 
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
