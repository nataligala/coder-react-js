import React, {useEffect, useState} from 'react'
import { ItemList } from '../ItemList/ItemList';
import { pedirDatos } from '../helpers/pedirDatos';

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
        .then( (resp)  => {
            setProductos(resp)
        })
        .catch( (error)  => {
            console.log(error)
        })
        .finally( () => {
            setLoading(false)
        })

    }, [])


    return (
        <>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </>    
    )
}
