import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
// import { HomeView } from './components/HomeView/HomeView';

import { BrowserRouter } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { AppRouter } from './components/router/AppRouter';



function App() {

  return (
    <BrowserRouter>
      
      <NavBar />
      
      {/* <HomeView /> */}
      
      <AppRouter />

      <Footer/>

    </BrowserRouter>


  );
}

export default App;

/* <Routes>
  <Route path="/" element={ <ItemListContainer/> }/>
  <Route path="/tienda/:categoryId" element={ <ItemListContainer/> }/>
  <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
  <Route path="/contacto" element={ <Contact/> } />

  <Route path="/cart" element={ <CartView/> }/>

  <Route path="*" element={ <Navigate to="/" />  } />
</Routes> */