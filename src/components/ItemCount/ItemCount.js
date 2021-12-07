import React from 'react';
import {Button} from 'react-bootstrap';

export const ItemCount = ({stock, setCounter, counter, onAdd}) => {


    const incrementar = () => {
        counter < stock && setCounter(counter+1);
    }

    const decrementar = () => {
        counter > 0 && setCounter(counter-1);
    }


    return (
        <div>
            <div className="my-3">
                <Button 
                    variant="success" 
                    disabled={counter === 0}
                    onClick={decrementar}
                >
                    -
                </Button>
                <span className="mx-2">{counter}</span>

                <Button 
                    variant="success my-2" 
                    onClick={incrementar}
                >
                    +
                </Button>
            </div>
            <Button 
                variant="success my-2" 
                disabled={counter === 0}
                onClick={onAdd}>
                Agregar al Carrito
            </Button>
        </div>
    )
}
