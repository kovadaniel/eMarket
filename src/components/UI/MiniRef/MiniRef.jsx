import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cl from './MiniRef.module.css'

function MiniRef({href, icon, ...props}) {
    return (
        <div {...props}>
            <a href={href} className={cl.reference}>
                <FontAwesomeIcon className={cl.icon} icon={icon}/>
            </a>
        </div>
    );
}

export default MiniRef;