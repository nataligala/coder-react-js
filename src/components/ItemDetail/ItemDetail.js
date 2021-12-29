import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';



export const ItemDetail = ({ id, name, price, img, description, stock }) => {

    const {addToCart, isInCart } = useContext(CartContext)


    const navigation = useNavigate()

    const [counter, setCounter] = useState(1);


    const handleVolver = () => {
        navigation(-1)
    }

    const handleVolverInicio = () => {
        navigation('/')
    }
    

    const handleAgregar = () =>{

        if (counter > 0){

            addToCart({
                id,
                name,
                price,
                img,
                counter
            })
        }

    }


    return (
        <div className="card products__img-container" style={{width: "18rem"}}>  
            <h2>{name}</h2>
            <img src={img} className="m-3" alt={name}/>
            <p className="card-text">Precio: $ {price}</p>
            
            {
                !isInCart(id)
                ?  <ItemCount 
                        stock={stock} 
                        counter={counter} 
                        setCounter={setCounter}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>  

            }



            <button className="btn btn-primary" onClick={handleVolver}>Continuar comprando</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}
