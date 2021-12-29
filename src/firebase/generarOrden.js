import { collection, Timestamp, writeBatch, query, where, documentId, getDocs, addDoc } from 'firebase/firestore/lite'
import Swal from 'sweetalert2'
import { db } from './config'

export const generarOrden = async (values, cart, emptyCart, totalCompra) => {

    const orden = {
        buyer: {...values},
        items: cart,
        total: totalCompra(),
        date: Timestamp.fromDate ( new Date())

    }

    const batch = writeBatch(db)

    const ordersRef = collection(db, "orders")
    const productosRef = collection(db, "productos")
    const q = query(productosRef, where(documentId(), 'in', cart.map(elemento => elemento.id)))

    const outOfStock = []

    const productos = await getDocs(q)

    productos.docs.forEach((doc) => {
        const itemToUpdate = cart.find((prod) => prod.id === doc.id)

        if (doc.data().stock >= itemToUpdate.counter) {
            batch.update(doc.ref, {
                stock: doc.data().stock - itemToUpdate.counter
            })
        } else {
            outOfStock.push(itemToUpdate)
        }
    })

    if (outOfStock.length === 0) {    
        addDoc(ordersRef, orden)
            .then((res) => {
                batch.commit()   
                Swal.fire({
                    icon: 'success',
                    title: 'Tu orden ha sido registrada exitosamente',
                    text: `El número de orden es: ${res.id}`                        
                })
                emptyCart()
            })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No hay stock de los siguientes productos:',
            text: outOfStock.map(elemento => elemento.name).join(', ')
        })
    }
}