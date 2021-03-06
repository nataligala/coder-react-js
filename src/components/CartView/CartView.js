import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'

export const CartView = () => {

    const {cart, emptyCart, totalCompra} = useContext(CartContext)

    if (cart.length === 0) {
        return (
        <div className="container my-5"> 
            <h2>No agregaste items al carrito aún</h2>
            <hr/>
            <Link to="/" className="btn btn-primary">Volver</Link>
        </div>
        )
    }

    return (
      <div className="container my-5">
        <h2>Cart View</h2>
        <section>
            {
                cart.map((prod) => <CartItem key={prod.id} {...prod} /> )
            }
        </section>
        <div>
          <p>Total a abonar: ${totalCompra()}</p>
          <button className="btn btn-danger" onClick={emptyCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-success mx-2">Terminar mi compra</Link>
        </div>
      </div>
    );
}
