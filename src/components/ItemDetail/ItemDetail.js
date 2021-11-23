import React from 'react';
import { useNavigate } from 'react-router';
import { ItemCount } from '../ItemCount.js/ItemCount';



export const ItemDetail = ({ id, name, price, img, description, category, stock }) => {


    const navigation = useNavigate()

    const handleVolver = () => {
        navigation(-1)
    }

    const handleVolverInicio = () => {
        navigation('/')
    }


    return (
        <div className="card products__img-container" style={{width: "18rem"}}>  
            <h2>{name}</h2>
            <img src={img} className="m-3" alt={name}/>
            <p className="card-text">Precio: $ {price}</p>
            <ItemCount stock="5"/>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver</button>
        </div>
    )
}
