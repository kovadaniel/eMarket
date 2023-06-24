import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles/App.css';
import Main from './pages/Main';
import { useState } from 'react';
import { DisplayContext } from './context';
import SideMenu from "./components/UI/SideMenu/SideMenu";
import useView from './hooks/useView';
import Footer from './components/Footer';
import About from './pages/About';
import Single from './pages/Single';
import AppRouter from './components/AppRouter';

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  
  useView(mobileView, setMobileView);

  return (
    <DisplayContext.Provider 
      value={{showSideMenu, setShowSideMenu, mobileView}}>
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
