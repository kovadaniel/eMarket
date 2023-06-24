import { useEffect, useRef, useState } from "react";
import { defaultTransition, dragSliderSensibility, minHeightOfProductSlider } from "../../../constants";
import DragSlide from "../DragSlide/DragSlide";
import cl from './DragSlider.module.css'
import {animate, motion, useAnimate, useMotionValue, useSpring} from 'framer-motion'
import SliderDots from "../../SliderDots";
import useResize from '../../../hooks/useResize'
import useHeightAnimation from "../../../hooks/useHeightAnimation";
import {makeRange} from '../../../utils'


function DragSlider({children, slides, transition = defaultTransition}) {
    /**
     * Note that any image in the slider has to have a prop 'draggable={false}'
     */
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const [index, setIndex] = useState(0); // index of the current slide in range (-eternity; eternity)
    const [width] = useResize(containerRef); // this hook  is used to balance DragSlider when the window is resized
    

    // we use a number '90' as a threshold because a plug for <img/> has height == 27.5px 
    // and we add additional 60 pixels for dots, so we have 27.5 + 60 = 87.5 ~ 90px
    const [MVheight, setHeight] = useHeightAnimation(0, 90);

    /*
    const MVheight = useSpring(0);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        MVheight.set(height);
    }, [height])
    */

    const range = makeRange(slides.length);

    function calculateNewX() {
        return -index * (containerRef.current.clientWidth || 0) // why '-index' and not 'index'?
    }
    function calculateNewXManually(i) {
        return -i * (containerRef.current.clientWidth || 0) // why '-index' and not 'index'?
    }

    function handleDotClick(i){
        // 1. de-normalize 'i'. Get 'i' from range (-eternity; eternity), not from [0, slides.length - 1)
        const scale = Math.floor(index / slides.length);
        const newIndex = i + slides.length * scale;

        // 2. animate movement and then change state
        const controls = animate(x, calculateNewXManually(newIndex), transition)
        .then(() => setIndex(newIndex))

        return controls.stop;
    }

    function handleDragEnd(e, dragProps){
        // e is a MouseEvent
        const clientWidth = containerRef.current.clientWidth || 0;

        const { offset, velocity } = dragProps;

        if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
            //console.log('before first animate(...)');
            // if slide was moved more upwards than sideways, we return it the its start position
            animate(x, calculateNewX(), transition); // params: (from, to, transition-options)
            return;
        }

        if (offset.x > clientWidth * dragSliderSensibility) {
            // clicked mouse to the right
            let deltaIndex =  Math.max(Math.ceil(offset.x / clientWidth), 1);
            setIndex(index - deltaIndex);
        } else if (offset.x < -clientWidth * dragSliderSensibility) {
            // clicked mouse to the left
            let deltaIndex =  Math.max(-Math.floor(offset.x / clientWidth), 1); // deltaIndex is a relative index from 'range' range (in our case [-1, 0, 1])
            setIndex(index + deltaIndex);
        } else {
            //console.log('before second animate(...)');
            animate(x, calculateNewX(), transition);
        }

    }

    useEffect(() => {
        // this 'animate' handles animation of snapping to the center of the newly selected slide on-Drag-End
        const controls = animate(x, calculateNewX(), transition);
        // stop animation when on unmount of this component
        // it is not simply 'controls.stop()' because useEffect() has to return function that will be invoked on unmount
        return () => controls.stop;
    }, [index])

    useEffect(() => {
        // this 'animate()' is used to center the slider to its current slide when the page is re-sized
        const controls = animate(x, calculateNewX(), {duration: 0});
        return controls.stop;
    }, [width]);
    
    // here we get slideIndex in the range got by shinking from (-eternity, eternity) to our [0, slides.length) range of image-indexes
    return (
        <div className={cl.sliderWrap}>
            <motion.div 
                className={cl.slider}
                ref={containerRef}
                style={{height: MVheight}}
            >
                {range.map(rangeValue => 
                    <DragSlide
                        key={rangeValue + index}
                        x={x}
                        onDragEnd={handleDragEnd}
                        index={rangeValue + index} // index in rage (-eternity; eternity), not in (0, users.length)
                        currentIndex={index}
                        renderPage={children} // function for creating a content of the current slide. Accepts index of the slide
                        transition={{duration: 3}}
                        setHeight={setHeight}
                    />
                )} 

    
            </motion.div>
            <SliderDots 
                    slides={slides} 
                    index={index} 
                    handleClick={(i) => handleDotClick(i)}
            />
        </div>
    );
}

export default DragSlider;