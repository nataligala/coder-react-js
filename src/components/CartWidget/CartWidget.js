import React from 'react';
import "./CartWidget.css";
import { BsFillCartPlusFill } from 'react-icons/bs';

export default function CartWidget() {


    return (
        <div>
            <BsFillCartPlusFill className="cartWidget"/>
        </div>
    )
}
