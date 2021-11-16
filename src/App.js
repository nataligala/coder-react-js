import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ProductCard } from './components/ProductCard/ProductCard';
import { ItemCount } from './components/ItemCount.js/ItemCount';


function App() {

  return (
    <div className="mi-app container">

      <NavBar />
      
      <main>
        <HomeView />

        
        <ItemListContainer greeting="Bienvenido a nuestra Tienda Online!!"/>

      </main>

      <Footer/>

    </div>
  );
}

export default App;
