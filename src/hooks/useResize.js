import { useState, useEffect, useRef } from "react";

/**
 * hook sets ResizeObserver on changes of the size of the ref-element in DOM,
 * and reflects these changes into 'size' state
 * 
 * @param {*} ref - is a reference to a root element
 * @returns size = [width, height]
 */
function useResize(ref) {
    const [size, setSize] = useState([0, 0]);
    const observer = useRef();

    useEffect(() => {

        if(observer.current) observer.current.unobserve(ref.current)

        const cb = (entries, observer) => {
            const entry = entries[0];
            if(entry){
                const boxSize = entry.contentBoxSize[0];
                setSize([boxSize.inlineSize, boxSize.blockSize])
            }
        }

        observer.current = new ResizeObserver(cb);
        observer.current.observe(ref.current);
    }, [ref]);

    return size;
}

export default useResize;