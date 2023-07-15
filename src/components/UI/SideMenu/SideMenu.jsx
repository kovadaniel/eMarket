//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useContext } from 'react';
import NavRefs from '../../NavRefs';
import cl from './SideMenu.module.css'
import { DisplayContext } from '../../../context';
import Search from '../../Search';
import Cart from '../../Cart';
import CloseButton from '../CloseButton/CloseButton';
import { CSSTransition } from 'react-transition-group';
import { amountInCart } from '../../../utils';

function SideMenu({...props}) {
    const {showSideMenu, setShowSideMenu, cart} = useContext(DisplayContext);

    return (
        <div {...props} onClick={() => setShowSideMenu(false)}>
            <CSSTransition in={showSideMenu} timeout={500} classNames={'bg-sm'} mountOnEnter unmountOnExit>
                <div className={cl.container} />
            </CSSTransition>
            <CSSTransition in={showSideMenu} timeout={700} classNames={'sm'}>
                <div id='side-menu' className={cl.menu} onClick={e => e.stopPropagation()}>
                    <NavRefs/>
                    <Search/>
                    <Cart value={amountInCart(cart)}/>
                </div>
            </CSSTransition>
            <CSSTransition in={showSideMenu} timeout={500} mountOnEnter unmountOnExit>
                <CloseButton className='side-menu-close'/>            
            </CSSTransition>
        </div>
            
        
    );
}

export default SideMenu;