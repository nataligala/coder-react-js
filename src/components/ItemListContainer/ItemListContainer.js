import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { ItemList } from '../ItemList/ItemList';
import { Loader } from '../Loader/Loader';

//Firebase
import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { db } from '../../firebase/config'

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams();



    useEffect(() => {
        
        setLoading(true)
        
        // Referencia
        const productosRef = collection(db, 'productos')

        const q = query(productosRef, where('category', '==', categoryId) )



        // GET a la referencia
        getDocs(q)
            .then((collection) => {
                const items = collection.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                console.log (items);

                setProductos(items);
            })    

            .finally(() => {
                setLoading(false)
            })    


    }, [categoryId])


    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <ItemList productos={productos}/>
            }
        </>    
    )
}
