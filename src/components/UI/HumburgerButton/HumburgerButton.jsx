import { DisplayContext } from '../../../context';

import { useContext } from "react";
import cl from './HumburgerButton.module.css'

function HumburgerButton(props) {
    const {showSideMenu, setShowSideMenu} = useContext(DisplayContext);
    return (
        <div {...props}>
            <button className={cl.button} onClick={() => setShowSideMenu(!showSideMenu)}>
                <div className={cl.icon}/>
            </button>
        </div>

    );
}

export default HumburgerButton;