import { useEffect } from "react";

function useView(mobileView, setMobileView) {
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 770px)');

        const handleTabletChange = (e) => {
            if(e.matches){
                setMobileView(false);
                //console.log('computer');
            } else{
                setMobileView(true);
                //console.log('mobile');
            }
        }
        handleTabletChange(mediaQuery);
        mediaQuery.addEventListener("change", handleTabletChange);

        return () => mediaQuery.removeEventListener("change", handleTabletChange)
    }, [])

    return mobileView;
}

export default useView;