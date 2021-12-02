import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from '../../context/CartContext'

export const CartItem = ({name, price, counter, id, img}) => {

    const {removeFromCart} = useContext(CartContext)

    return (
        <div>
            <h3>{name}</h3>
            <img src={img} className="m-3" style={{width: "18rem"}} alt={name}/>
            <p>Precio: $ {price}</p>
            <p>Cantidad: {counter}</p>
            <button 
                className="btn btn-danger"
                onClick={() => { removeFromCart(id) }}
            >
                <BsFillTrashFill/>
            </button>
        </div>
    )
}
