import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

export const ItemCount = ({stock}) => {
    const [counter, setCounter] = useState(1);

    const incrementar = () => {
        if(stock>counter){
            setCounter(counter+1);
        }else{
            alert("No hay stock");
        }
        
    }

    const decrementar = () => {
        if(counter>1) {
            setCounter(counter-1);
        }else{
            alert("Acción no posible");
        }
    }

    const respuesta = () =>{
        alert(`Agregaste ${counter}`);
    }


    return (
        <div>
            <h2>{counter}</h2>
            <div className="mb-2 justify-content-md-center">
                <Button variant="success" onClick={decrementar}>-</Button>
                <div className="vr" />
                <Button variant="success" onClick={incrementar}>+</Button>
            </div>
            <Button variant="success" size="lg" onClick={respuesta}>Agregar al Carrito</Button>
        </div>
    )
}
