import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
// import { HomeView } from './components/HomeView/HomeView';

import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { AppRouter } from './components/router/AppRouter';
import { CartProvider } from './context/CartContext';



function App() {


  return (

    <CartProvider>
      <BrowserRouter>
        
        <NavBar />
        
        {/* <HomeView /> */}
        
        <AppRouter />

        <Footer/>

      </BrowserRouter>
    </CartProvider>

  );
}

export default App;