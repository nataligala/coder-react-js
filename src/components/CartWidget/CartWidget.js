import React, { useContext } from 'react';
import "./CartWidget.css";
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {

    const {totalCant, cart} = useContext(CartContext)


    return (
        <div className={cart.length === 0 ? 'hidden' : ''}>
            <Link to="/cart">
                <BsFillCartPlusFill className="cartWidget"/>
                <span className="cant">{totalCant()}</span>
            </Link>
        </div>
    )
}
