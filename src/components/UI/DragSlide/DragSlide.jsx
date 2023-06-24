import { motion } from "framer-motion"
import React, { useEffect, useMemo, useRef } from "react"
import cl from './DragSlide.module.css'
import useResize from "../../../hooks/useResize";

export function DragSlide({ index, currentIndex, renderPage, x, onDragEnd, setHeight}) {
  const child = useMemo(() => renderPage({index}), 
                        [index, renderPage])
  const container = useRef();

  const [width, height] = useResize(container);

  useEffect(() => {
    // if this slide is currently selected, set it height as the height of the slider 
    if(index === currentIndex) {
      setHeight(container.current.clientHeight);
    }
  }, [currentIndex, container, height]) // currentIndex is the index of currently selected slide (range = (-eternity; eternity))
  
  return (
    <motion.div
      className={cl.page}
      ref={container}
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  )
}

export default DragSlide;