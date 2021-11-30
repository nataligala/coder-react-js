import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount';



export const ItemDetail = ({ id, name, price, img, description, stock }) => {


    const navigation = useNavigate()

    const [counter, setCounter] = useState(1);

    const [agregado, setAgregado] = useState(false);

    const handleVolver = () => {
        navigation(-1)
    }

    const handleVolverInicio = () => {
        navigation('/')
    }

    

    const handleAgregar = () =>{

        if (counter > 0){

            console.log('Item agregado: ', {
                id,
                name,
                price,
                counter
            })
    
            setAgregado(true)

        }


    }


    return (
        <div className="card products__img-container" style={{width: "18rem"}}>  
            <h2>{name}</h2>
            <img src={img} className="m-3" alt={name}/>
            <p className="card-text">Precio: $ {price}</p>
            
            {
                !agregado
                ?  <ItemCount 
                        stock={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>  

            }



            <button className="btn btn-primary" onClick={handleVolver}>Volver a atrás</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al Inicio</button>
        </div>
    )
}
