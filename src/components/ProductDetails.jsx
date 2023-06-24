import ProductSpecial from "./ProductSpecial";

function ProductDetails({data}) {
    return (
        <div className="product-tab-details">
            <div className="price">USD: ${data.price}</div>
            <h2 className="title">{data.title}</h2>
            {data.text.split('\n').map((p, i) => <p key={i} className="text">{p}</p>)}
            <div className="product-specials">
                <ProductSpecial special={data.motto}/>
                <ProductSpecial special={data.sale}/>
            </div>
        </div>
    );
}

export default ProductDetails;