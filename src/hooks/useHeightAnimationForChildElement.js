import { useRef } from "react";
import useResize from "./useResize";
import { useEffect } from "react";

function useHeightAnimationForChildElement({condition, setHeight}) {
    const ref = useRef();
    const [height] = useResize(ref);

    useEffect(() => {
      // if this slide is currently selected, set it height as the height of the slider 
      if(condition) {
        setHeight(ref.current.clientHeight);
      }
    }, [ref, height]) // currentIndex is the index of currently selected slide (range = (-eternity; eternity))
  
}

export default useHeightAnimationForChildElement;