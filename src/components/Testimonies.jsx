import { amountOfSlidesInDraggableSlider } from "../constants";
import DragSlider from "./UI/DragSlider/DragSlider";
import SectionHeader from "./UI/SectionHeader/SectionHeader";
import SliderLoad from "./UI/SliderLoad/SliderLoad";
import Person from "./UI/Person/Person";
import TestimonySlider from "./TestimonySlider";

function Testimonies({users, ...props}) {
    return (
        <div {...props}>
            <div className="container">
                <SectionHeader
                    inscription='testimony'
                    title='Happy Clients'/>
                {/*users
                ? <Carousel slides={users}/>
                : <SliderLoad/>*/}
                {users && users.length 
                ? <TestimonySlider users={users}/>
                : <SliderLoad/>}
            </div>
        </div>
    );
}

export default Testimonies;