import { useInView } from "framer-motion";
import { useState, useEffect } from "react";

function useLeftView(ref) {
    const [onceAppeared, setOnceAppeared] = useState(false);
    const [isLeft, setIsLeft] = useState(false);
    const inView = useInView(ref);

    useEffect(() => {
        if(inView && !onceAppeared){
            setOnceAppeared(true);
        }
        if(!inView && onceAppeared){
            setIsLeft(true);
        }
        
    }, [inView])

    return isLeft;
}

export default useLeftView;