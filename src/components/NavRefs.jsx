import { references } from "../constants";
import RefLi from "./RefLi";

function NavRefs({...props}) {
    return (
        <ul {...props} className="ref-list">
            {references.map((reference, i) => {
                return <RefLi key={i} reference={reference}/>
            })}
        </ul>
    );
}

export default NavRefs;