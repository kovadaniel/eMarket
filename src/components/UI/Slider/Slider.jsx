import { useEffect, useRef, useState } from "react";
import cl from './Slider.module.css'
import { switchSlideTime } from "../../../constants";
import Description from "../Description/Description";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Slide from "../Slide/Slide";
import SliderDots from "../../SliderDots";


function Slider({slides}) {
    const [curIndex, setCurIndex] = useState(0);
    const timerRef = useRef(null);

    function next(){
        let nextIndex = slides ? ((curIndex + 1) % slides.length) : 0;
        setCurIndex(nextIndex);
    }

    useEffect(() => {
        timerRef.current = setTimeout(() => next(), switchSlideTime);
        //console.log("current timeout:", timerRef.current);
    }, [curIndex, slides])

    return (
        /**
         * Here we use setTimeout instead of setInterval because 
         * setTimeout changes our state so this component re-renders
         * every time setTimeout is fired (because it is in useEffect). 
         * So in this cases setTimeout works as setInterval
         */
        <div className={cl.slider}>
            {slides.map((slide, i) => 
                <CSSTransition
                    key={slide.title}
                    classNames='slide'
                    timeout={700}
                    appear={true}
                    in={i===curIndex}>
                    
                    <Slide url={slide.image}/>
                </CSSTransition>
                
            )}

            <div className={cl.filter} ></div>

            {/* if we have some information for description in out slides, 
                we make and show current slide description below*/}
            {slides[0].title && slides[0].price && slides[0].description
            && <div className={cl.description}>
                <TransitionGroup>
                    {/*console.log('show', show)*/}
                    <CSSTransition
                        key={slides[curIndex].id}
                        appear={true}
                        timeout={{enter: 2100,
                                exit: 700}}
                        classNames='descanim'>
                                <Description 
                                product={slides[curIndex]}/>
                            
                    </CSSTransition> 
                    
                </TransitionGroup>
            </div>} 

            <SliderDots 
                slides={slides} 
                index={curIndex} 
                setIndex={setCurIndex} 
                timerRef={timerRef}/>

        </div>
    );
}

export default Slider;