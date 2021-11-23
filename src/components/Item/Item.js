import React from 'react';
// import { ItemCount } from '../ItemCount.js/ItemCount';
import './Item.css';

export const Item = ({id, name, price, origin, img, alt, category}) => {

    return (
        <article key={id} className="card products__img-container" style={{width: "18rem"}}>
            <img src={img} className="m-3" alt={alt}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{origin}</p>
                <button className="btn btn-primary">Ver más</button>
            </div>   
        </article>
    )
}
