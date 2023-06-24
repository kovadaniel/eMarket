

import NavRefs from './NavRefs';
import Search from './Search';
import Cart from './Cart';
import HumburgerButton from './UI/HumburgerButton/HumburgerButton';


function Navbar() {
    return (
        <div id='navbar'>
            <div className='container'>
                {/*<div className='row'>*/}
                    <h1><a href='/' className='shopName'>eMarket</a></h1>
                    <NavRefs/>
                    <Search/>
                    <Cart animate={true}/>
                    <HumburgerButton className="side-menu-button"/>
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Navbar;
