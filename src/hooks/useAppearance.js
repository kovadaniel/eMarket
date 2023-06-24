import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

/**
 * this hook animates first appearance of an element on the screen
 * 
 * to use this hook, your motion.<element> should have variants, and
 * within this variants a key 'visible' should be. As this function triggers
 * this variant by: <useAnimation-result>.start("visible")
 * 
 * callback have to return function, that will be executed onUnmount of the component
 * like cleaning up something
 * settings has a form like {amount: 0.5}
 * @param {*} callback, settings = {amount <size of the element that needs to be i view from 0 to 1>: }
 * @returns [ref, controls, inView]
 */
function useAppearance(callback = () => {}, settings = {amount: 0}, loadIndicator) {
    const controls = useAnimation();
    const ref = useRef();
    const inView = useInView(ref); //{ once: true, ...settings });

    useEffect(() => {
        let ctrls;
        //console.log('[useAppearance] before in view');
        //console.log('inView: ', inView);
        if(inView){
            //console.log('in view');
            controls.start('visible');
            ctrls = callback && callback();
        }
        
        // in code below we clear consequences of using animate()
        // in the callback function. For example, we execute 
        // animation>.stop() on unmount
        if(typeof ctrls === "function"){
            return ctrls;
        }
    }, [controls, inView, loadIndicator])

    return [ref, controls, inView];
}

export default useAppearance;