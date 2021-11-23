import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';


function App() {

  return (
    <BrowserRouter>
      
      <NavBar />
      
      <HomeView />

      <Routes>
        <Route path="/" element={ <ItemListContainer/> }/>
        <Route path="/tienda/:categoryId" element={ <ItemListContainer/> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer/> } />
      </Routes>
      

      <Contact/>

      <Footer/>

    </BrowserRouter>


  );
}

export default App;
