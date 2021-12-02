import React, { useContext } from 'react';
import "./CartWidget.css";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {totalCant} = useContext(CartContext)


    return (
        <div>
            <BsFillCartPlusFill className="cartWidget"/>
            <span>{totalCant()}</span>
        </div>
    )
}
