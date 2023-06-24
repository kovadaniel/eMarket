import { CSSTransition } from 'react-transition-group';
import cl from './CloseButton.module.css'
import { useContext } from 'react';
import { DisplayContext } from '../../../context';


function CloseButton(props) {
    const {showSideMenu, setShowSideMenu} = useContext(DisplayContext);
    return (
        <div {...props}>
            <button className={cl.button} onClick={() => setShowSideMenu(false)}>
                <CSSTransition 
                    in={showSideMenu} 
                    timeout={30000} 
                    appear={true}
                    classNames={'sm-close'}
                    unmountOnExit
                    mountOnEnter>
                    <div className={cl.line}/>
                </CSSTransition>
            </button>
        </div>

    );
}

export default CloseButton;