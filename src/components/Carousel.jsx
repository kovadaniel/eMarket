import Slider from 'infinite-react-carousel';
import Person from './UI/Person/Person';


function Carousel({slides}) {
    const settings =  {
        arrows: false,
        dots: true,
        duration: 400,
        className: 'drag-slider',
        adaptiveHeight: true,
        wheel: true,
      };
      return (
        <div>
          <Slider { ...settings }>
            {slides.map(slide => <Person user={slide}/>)}
          </Slider>
        </div>
      );
}

export default Carousel;