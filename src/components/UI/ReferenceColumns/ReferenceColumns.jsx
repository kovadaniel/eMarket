import { useState, useMemo, useEffect } from "react";
import RefLi from "../../RefLi";
import cl from "./ReferenceColumns.module.css";
import useWindowSize from "../../../hooks/useWindowSize";


function ReferenceColumns({refs}) {

    const [uls, setUls] = useState();
    const [ulMaxLength, setUlMaxLength] = useState(0);
    const [width] = useWindowSize();

    useEffect(() => {
        if(width > 770){
            setUlMaxLength(Math.ceil(refs.length / 3));
        } else if(width > 480){
            setUlMaxLength(Math.ceil(refs.length / 2));
        } else{
            setUlMaxLength(refs.length);
        }
    }, [refs.length, width])

    useMemo(() => {
        const output = [];
        let index = -1;
        //const ulMaxLength = Math.ceil(refs.length / 3);
        for(let i = 0; i < refs.length; i++){
            if(i % ulMaxLength){
                output[index].push(refs[i]);
            } else{
                output.push([refs[i]]);
                index++;
            }
        }
        setUls(output);
    }, [refs, ulMaxLength])

    

    return (
        <div className={cl.container}>
            {uls && uls.map((ul, i) => {
                return (
                    <ul key={i} className={cl.list}>
                        {ul.map((li, i) => <RefLi key={i} reference={li}/>)}
                    </ul>
                )
            })}
        </div>
    );
}

export default ReferenceColumns;