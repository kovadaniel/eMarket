import { useEffect, useRef } from "react";

function useObserver(ref, canLoad, isLoading, inCallback, outCallback, margin = '0px') {
    // observer for checking visibility of the current service in vierport
    const observer = useRef();

    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current.disconnect();

        const cb  = (entries, observer) => {
            if(entries[0].isIntersecting && canLoad){
                inCallback && inCallback();
            }
            if(!entries[0].isIntersecting && canLoad){
                outCallback && outCallback();
            }
        }
        observer.current = new IntersectionObserver(cb, {rootMargin: margin});
        observer.current.observe(ref.current);
    }, [isLoading]);
}

export default useObserver;