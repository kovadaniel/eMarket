import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cl from "./Social.module.css"

function Social({data}) {
    return (
        <div className={cl.wrap}>  
            <a href={data.reference}>
                <FontAwesomeIcon className={cl.icon} icon={data.fasIcon}/>
            </a>
        </div>
    );
}

export default Social;