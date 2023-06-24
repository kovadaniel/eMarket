import { useState } from "react";

function RefLi({reference}) {
    const [hover, setHover] = useState(false);

    return (
        <li className="ref-list-item" 
            onMouseOver={e => setHover(true)}
            onMouseLeave={e => setHover(false)}
            >
            <a href={reference.current.ref}>
                {reference.current.title}
            </a>
            {reference.content && 
                <ul className={`sub-ref-list ${hover ? 'active' : ''}`} onMouseOver={e => e.stopPropagation()}>
                    {reference.content.map(r => 
                        <li key={r.title} 
                            className="sub-ref-list-item">
                            <a href={r.ref}>
                                {r.title}
                            </a>
                        </li> 
                    )}
                </ul>  
            }
        </li>
    );
}

export default RefLi;