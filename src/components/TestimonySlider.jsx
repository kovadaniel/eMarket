import { useAnimation } from "framer-motion";
import { amountOfSlidesInDraggableSlider, defaultAppearVariants } from "../constants";
import DragSlider from "./UI/DragSlider/DragSlider";
import Person from "./UI/Person/Person";
import useAppearance from "../hooks/useAppearance";
import { motion } from "framer-motion";

function TestimonySlider({users}) {
    const [ref, controls] = useAppearance()

    return (
        <motion.div 
            className="testimony-slider" 
            ref={ref}
            variants={defaultAppearVariants}
            initial='hidden'
            animate={controls}>
            <DragSlider slides={users.slice(0, amountOfSlidesInDraggableSlider)}>
                {// function for content creation in a slide:
                ({index}) => {
                    const slides = users.slice(0, amountOfSlidesInDraggableSlider);
                    /* we normalize slide index (from '{index}') from range [-eternity; eternity] to the range 
                    * (-users.length; 0) or (0; users.length) (depending on wheather it is positive or negative). */
                    const modulo = (index % slides.length); 
                    /* code below also handles cases when we move in negitive slide indexes. If current index of the slide 
                    * is negative, we add 'users.length' to normalize this index to [0, url.length] range. This is the 
                    * very range that matches with our array of users from state */
                    const userIndex = modulo < 0 ? slides.length + modulo : modulo; 
                    return <Person
                        key={slides[userIndex].id} 
                        user={slides[userIndex]}/>
                }}
            </DragSlider>
        </motion.div>
    );
}

export default TestimonySlider;