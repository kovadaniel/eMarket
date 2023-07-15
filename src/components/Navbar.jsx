

import NavRefs from './NavRefs';
import Search from './Search';
import Cart from './Cart';
import HumburgerButton from './UI/HumburgerButton/HumburgerButton';
import { DisplayContext } from '../context';
import { useContext } from 'react';
import { amountInCart } from '../utils';


function Navbar() {
    const {cart} = useContext(DisplayContext);
    return (
        <div id='navbar'>
            <div className='container'>
                {/*<div className='row'>*/}
                    <h1><a href='/' className='shopName'>eMarket</a></h1>
                    <NavRefs/>
                    <Search/>
                    <Cart animate={true} value={amountInCart(cart)}/>
                    <HumburgerButton className="side-menu-button"/>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Navbar;
