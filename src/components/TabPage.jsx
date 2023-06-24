import { motion } from "framer-motion";
import useResize from "../hooks/useResize";
import { useRef } from "react";
import { useEffect } from "react";

const tabVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
    exit: {opacity: 0, y: 30, position: 'absolute', width: 'inherit',},
}

function TabPage({i, currentIndex, setHeight, children}) {
    
    const ref = useRef();
    const [height] = useResize(ref);

    useEffect(() => {
      // if this slide is currently selected, set it height as the height of the slider 
      if(i === currentIndex) {
        setHeight(ref.current.clientHeight);
      }
    }, [currentIndex, ref, height]) // currentIndex is the index of currently selected slide (range = (-eternity; eternity))
  
    
    return (
        <motion.div 
            key={i}
            ref={ref}
            variants={tabVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{duration: .4}}
        >
            {children}
        </motion.div>
    );
}

export default TabPage;