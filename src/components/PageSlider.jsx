import { useEffect, useRef, useState } from "react"
import { animate, motion, useMotionValue } from "framer-motion"
import { Page } from "./Page"

//const range = [-1, 0, 1];
const range = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  overflowX: "hidden"
}

const transition = {
  type: "spring",
  bounce: 0,
}

function PageSlider ({ children }) {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  function calculateNewX() {
    return -index * (containerRef.current.clientWidth || 0) // why '-index' and not 'index'?
  }

  function handleDragEnd(e, dragProps){
    const clientWidth = containerRef.current.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, calculateNewX(), transition); // params: (from, to, transition-options)
      return;
    }

    if (offset.x > clientWidth / 4) {
      // view 'moves' to the right
      let newIndex = Math.max(Math.ceil(offset.x / clientWidth), 1);
      setIndex(index - newIndex);
      /*
      console.log('[left] offset.x:', offset.x);
      console.log('[left] clientWidth:', clientWidth);
      console.log('[left] Math.floor(offset.x / clientWidth):', Math.floor(offset.x / clientWidth));
      console.log('[left] newIndex:', newIndex);*/
      //setIndex(index - 1);
    } else if (offset.x < -clientWidth / 4) {
      // view 'moves' to the left
      let newIndex = Math.max(-Math.floor(offset.x / clientWidth), 1);
      setIndex(index + newIndex);
      /*
      console.log('[right] offset.x:', offset.x);
      console.log('[right] clientWidth:', clientWidth);
      console.log('[left] Math.floor(offset.x / clientWidth):', Math.floor(offset.x / clientWidth));
      console.log('[right] newIndex:', newIndex);
      */
      //setIndex(index + 1)
    } else {
      animate(x, calculateNewX(), transition)
    }
  }

  useEffect(() => {
    // this function handles snapping to the center of the new slide on-Drag-End
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop; // clean up this animation
  }, [index])

  return (
    <motion.div ref={containerRef} style={containerStyle}>
      {range.map(rangeValue => {
        return (
          <Page
            key={rangeValue + index}
            x={x}
            onDragEnd={handleDragEnd}
            index={rangeValue + index}
            renderPage={children} // function for creating a content of the current slide. Accepts index of the slide
          />
        )
      })}
    </motion.div>
  )
}

export default PageSlider;
//VirtualizedPage.displayName = "VirtualizedPage"
