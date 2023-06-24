import { motion } from "framer-motion";
import useAppearance from "../hooks/useAppearance";
import DragSlider from "./UI/DragSlider/DragSlider";
import ProductSlide from "./ProductSlide";

const AppearVariants = {
    visible: {opacity: 1, y: 0, transition: {duration: 2, delay: 0}},
    hidden: {opacity: 0, y: 50},
  }

function ProductSlider({product}) {
    const [ref, controls] = useAppearance();
    
    return (
        <motion.div 
            className="product-slider"
            ref={ref}
            variants={AppearVariants}
            animate={controls}
            initial='hidden'
        > 
            <DragSlider 
                slides={product.images} 
                transition={{type: 'ease', duration: .5}}
            >
                {// a function for creation a content in a slide:
                ({index}) => {
                    const slides = product.images;
                    const modulo = (index % slides.length); 
                    const userIndex = modulo < 0 ? slides.length + modulo : modulo; 
                    return <ProductSlide key={index} url={slides[userIndex]}/>
                }}
            </DragSlider>
        </motion.div>
    );
}

export default ProductSlider;