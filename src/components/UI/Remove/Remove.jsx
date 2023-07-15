import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from './Remove.module.css'

function Remove({remove}) {
    return (
        <button className={cl.button} onClick={remove}>
            <FontAwesomeIcon icon={faTrashCan}/>
            <span className={cl.title}>Remove</span>
        </button>
    );
}

export default Remove;