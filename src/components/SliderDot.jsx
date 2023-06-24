import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function SliderDot({i, index, setIndex, timerRef, length,
                    handleClick, activeDotRef}) {
    const [isActive, setIsActive] = useState(false);
    const dot = useRef();

    useEffect(() => {
        const isAct = index >= 0 
        ? i === (index % length)
        : i === ((length + (index % length)) % length);

        setIsActive(isAct);

        // needed for initial setting of activeDotRef
        if(isAct) activeDotRef.current = dot.current;

    }, [activeDotRef, i, index, length])
    

    return (
        <div 
            ref={dot}
            className={`dot ${isActive ? 'active' : ''}`}
            onClick={e => {
                /* if current slider is automatically switched, timerRef.current contains timeout of the next switching*/
                if(timerRef){
                    clearTimeout(timerRef.current);
                }
                if(handleClick){
                    
                    if(activeDotRef.current){
                        // manually remove acive class from the previously selected dot
                        activeDotRef.current.classList.remove('active');
                        // change reference to the selected dot to current dot
                        // immediately after the current dot is clicked
                        // It is important because when user clicks fast on dots, 
                        // without the code below, a previously selected dot will be still having 
                        // class 'active' (as we add it manually 2 lines below from here)
                        activeDotRef.current = dot.current;
                    }
                    e.target.classList.add('active');
                    handleClick(i);
                } else{
                    setIndex(i)
                }
            }}>
            •
        </div>
    );
}

export default SliderDot;