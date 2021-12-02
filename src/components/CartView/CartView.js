import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { CartItem } from '../CartItem/CartItem'

export const CartView = () => {

    const {cart, emptyCart} = useContext(CartContext)

    return (
        <div className="container my-5">
            {
                cart.length > 0 

                ?   <>
                        <h2>Cart View</h2>
                        <section>
                            {
                                cart.map((prod) => <CartItem {...prod}/>)
                            }
                        </section>
                        <div>
                            <button className="btn btn-danger" onClick={emptyCart}>Vaciar carrito</button>
                            <button className="btn btn-success mx-2">Terminar mi compra</button>
                        </div>
                    </>

                :   <>
                        <h2>No agregaste items al carrito aún</h2>
                        <hr/>
                        <Link to="/" className="btn btn-primary">Volver</Link>
                    </>
            }
        </div>
    )
}
