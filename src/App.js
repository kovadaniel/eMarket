import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';
import { useState } from 'react';
import { DisplayContext } from './context';
import SideMenu from "./components/UI/SideMenu/SideMenu";
import useView from './hooks/useView';
import Footer from './components/Footer';
import AppRouter from './components/AppRouter';

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  /**
 * In order to store userCart we use localStorage that can store only strings
 * The format for storing data about client's cart is this:
 *  '<product-id>-<amount> <product-id>-<amount>' 
 * e.g. '34-2 55-1' means 2 products with id==34 and one product with id==55 in the cart
 * The state beelow reflects the content of localStorage
 */
  const [cart, setCartStorage] = useState(localStorage.getItem('cart'))

  const setCart = (storage) =>{
    localStorage.setItem('cart', storage);
    setCartStorage(storage);
  }
  
  useView(mobileView, setMobileView);

  return (
    <DisplayContext.Provider 
      value={{showSideMenu, setShowSideMenu, mobileView, cart, setCart}}>
      <div className='App'>
        <Navbar/>
        <SideMenu/>

        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>

        <Footer/>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
