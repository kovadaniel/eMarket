import BuyButton from "../BuyButton/BuyButton";
import cl from "./Description.module.css"

function Description({product, ...props}) {
    return (
        <div {...props} className={cl.container}>
            <span className={cl.price}>${product.price}</span>
            <h2 className={cl.title}>{product.title}</h2>
            <p className={cl.body}>{product.description}</p>
            <BuyButton>Purchase Now</BuyButton>
        </div>
    );
}

export default Description;