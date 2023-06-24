import { useRef, useState } from "react";
import useObserver from "../hooks/useObserver";
import { CSSTransition } from "react-transition-group";

// you shouldn't pass prop 'in' to OnViewTransition
/**
 * 
 * @param {*} { timeout, className, classNames, margin? = '50px', delay? = 3 }
 *             margin - is a space on which the border on the element 'moves outside the element'
 * @returns children wrapped in div with a class = className and appearance animation
 */
function OnViewTransition({margin, delay, children, className, ...props}) {
    // a state for indicating wheather or not the section was showed
    const [isShowed, setIsShowed] = useState(false); 

    const indicator = useRef();

    useObserver(
        indicator, 
        true, 
        false, 
        () => {
            setIsShowed(true);
        }, 
        () => true,
         margin);

    // example of props: in={isShowed} timeout={1000} classNames='service'
    return (
        <CSSTransition in={isShowed} {...props}>
            {/*animation will be applied on this div below*/}
            <div 
                ref={indicator} 
                className={className ? className : ''} 
                style={{transitionDelay: delay ? delay : 0}}>
                
                {children}
            </div>
        </CSSTransition>
    );
}

export default OnViewTransition;