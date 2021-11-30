import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { ItemList } from '../ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams();



    useEffect(() => {
        
        setLoading(true)
        pedirDatos()
        .then( (resp)  => {

            if(!categoryId){
                setProductos(resp)
            } else{
                setProductos ( resp.filter ( prod => prod.category === categoryId))
            }
            
        })
        .catch( (error)  => {
            console.log(error)
        })
        .finally( () => {
            setLoading(false)
        })

    }, [categoryId])


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
