import BuyButton from "./UI/BuyButton/BuyButton";

function ProductPanel({product, ...props}) {
    return (
        <div id="product-panel" {...props}>
           {product && 
           <div className="container">
                <h2 className="product-panel-title">{product.title}</h2>
                <div className="product-panel-buttons">
                    <BuyButton>Add to cart</BuyButton>
                    <BuyButton>Compare</BuyButton>
                </div>
            </div>}
        </div>
        
    );
}

export default ProductPanel;