import SliderLoad from "./UI/SliderLoad/SliderLoad";
import ProductSlider from "./ProductSlider";

function ProductSliderSection({product, isLoading, error}) {
    return (
        !error &&
        <div className="product-slider-section">
            <div className="container">
                {isLoading 
                ? <SliderLoad/>
                : <ProductSlider product={product}/>}
            </div>
        </div>
    );
}

export default ProductSliderSection;