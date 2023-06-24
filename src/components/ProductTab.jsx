import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useResize from "../hooks/useResize";
import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useState } from "react";

function ProductTab({page}) {
    const [showIcons, setShowIcons] = useState(false);
    const [width, height] = useWindowSize();
    useEffect(() => {
        if(width >= 770){
            setShowIcons(false);
        }
        if(width < 770){
            setShowIcons(true);
        }
    }, [width]);
    return (
        <button className="tab-nav">
            {showIcons 
            ? <FontAwesomeIcon icon={page.icon} className="tab-nav-icon"/>
            : page.title}
        </button>
    );
}

export default ProductTab;