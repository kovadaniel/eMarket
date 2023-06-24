function ProductSlide({url}) {
    return (
        /*<img 
            src={slides[userIndex]} 
            alt="product" 
            className="product-drag-slide"
            draggable={false}/>*/
        <div className="image-container">
            <div className="image-filter"></div>
            <img 
                src={url} 
                alt="product" 
                className="product-slide"
                draggable={false}/>
        </div>
    );
}

export default ProductSlide;