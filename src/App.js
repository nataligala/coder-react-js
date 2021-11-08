import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { NavBar } from './components/NavBar/NavBar';
import { HomeView } from './components/HomeView/HomeView';
import { Footer } from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <div className="mi-app container">

      <NavBar />
      
      <ItemListContainer greeting="Bienvenido a nuestra Tienda Online!!"/>

      <main>
        <HomeView />


      </main>

      <Footer/>

    </div>
  );
}

export default App;
