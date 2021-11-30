import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { CartView } from '../CartView/CartView'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../ItemListContainer/ItemListContainer'
import { Contact } from '../Contact/Contact'
import { HomeView } from '../HomeView/HomeView'

export const AppRouter = () => {

    const routes = useRoutes([
        { path: "/", element: <HomeView/> },
        { path: "/tienda/:categoryId", element: <ItemListContainer/> },
        { path: "/detail/:itemId", element: <ItemDetailContainer/> },
        { path: "/contacto", element: <Contact/> },

        { path: "/cart", element: <CartView/> },
        
        { path: "*", element: <Navigate to="/"/> }
    ])

    return routes
}