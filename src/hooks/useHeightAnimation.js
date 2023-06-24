import { animate, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { defaultTransition } from "../constants";

/**
 * 
 * @param {*} initialHeight 
 * @param {*} threshold 
 * @returns 
 */
function useHeightAnimation(initialHeight = 0, threshold = 0) {
    const [height, setHeight] = useState(initialHeight);
    
    //console.log('[before-useEffect in useHeightAnimation] height ', height);
    //const MVheight = useMotionValue(height);
    const heightSpring = useSpring(height, defaultTransition);
    
    useEffect(() => {
        heightSpring.set(height);
    }, [height])


    useEffect(() => {
        // this code prevents opening from top to bottom the slider on first loading
        //let controls;

        if(heightSpring.get() > threshold){
            //console.log('animating from more than threshold (' + threshold + ')');
            //controls = animate(MVheight, height, defaultTransition);
            heightSpring.set(height);

        } else{
            //console.log('animating from less than threshold (' + threshold + ')');
            //controls = animate(MVheight, height, {duration: 0})
            heightSpring.set(height);
        }

        //console.log('[useEffect in useHeightAnimation] MVheight.get', MVheight);
        //console.log('[useEffect in useHeightAnimation] MVheight.get() ', MVheight.get());
        
        console.log('[useEffect in useHeightAnimation] MVheight.get', heightSpring);
        console.log('[useEffect in useHeightAnimation] MVheight.get() ', heightSpring.get());
    
        console.log('[useEffect in useHeightAnimation] threshold ', threshold);

        console.log('[useEffect in useHeightAnimation] height ', height);
        console.log('/');

        //return controls.stop;
    }, [height])
    
    return [heightSpring, setHeight]
}

export default useHeightAnimation;