import { motion } from "framer-motion"
import React, { useMemo } from "react"

const pageStyle = {
  position: "absolute",
  width: "100%",
  height: "100%"
}

export function Page({ index, renderPage, x, onDragEnd }) {
  const child = useMemo(() => renderPage({index}), 
                        [index, renderPage])

  return (
    <motion.div
      style={{
        ...pageStyle,
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`
      }}
      draggable
      drag="x"
      dragElastic={1}
      onDragEnd={onDragEnd}>

      {child}
      <span>index: {index}</span>
    </motion.div>
  )
}

export default Page;