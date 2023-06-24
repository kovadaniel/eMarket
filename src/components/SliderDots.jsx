import { useRef } from "react";
import SliderDot from "./SliderDot";

function SliderDots({slides, index, setIndex, timerRef, handleClick}) {
    //const [activeDotRef, setActiveDotRef] = useState();
    const activeDotRef = useRef();

    return (
        <div className="dots">
            {slides.map((slide, i) => 
                <SliderDot 
                    i={i}
                    key={i}
                    index={index}
                    // we get 'setIndex' from the MainSlider, but not from the DragSlider
                    setIndex={setIndex}
                    length={slides.length}
                    timerRef={timerRef}
                    handleClick={handleClick}
                    activeDotRef={activeDotRef}
                    //setActiveDotRef={setActiveDotRef}
                    />)}
        </div>
    );
}

export default SliderDots;