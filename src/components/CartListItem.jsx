import { addToStorage, removeFromStorage, subtractFromStorage, truncateText } from "../utils";
import CheckBox from "./UI/CheckBox/CheckBox";
import Amount from "../components/UI/Amount/Amount"
import Remove from "./UI/Remove/Remove";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { DisplayContext } from "../context";

const cartItemAppearanceVariants = {
    visible: (i = 0) => ({opacity: 1, y: 0, transition: {duration: .2, delay: .1 * i, ease: 'linear'}}),
    hidden: {opacity: 0, y: 50},
}
const exitVariants = {
    visible: {opacity: 1},
    exit: {opacity: 0, height: 0, paddingTop: 0, paddingBottom: 0, transition: {duration: .3, ease: 'linear'}}
}
function CartListItem({product, removeProduct, number, checked, onCheck}) {
    const {cart, setCart} = useContext(DisplayContext);
    const [quantity, setQuantity] = useState(parseInt(product.amountInCart));


    return (
        <motion.li 
            className="cart-list-item"
            variants={cartItemAppearanceVariants}
            initial='hidden'
            animate='visible'
            custom={number}
        >
            <div className="checkbox-cell">
                <motion.div 
                    className="checkbox-wrap"  
                    variants={exitVariants}
                    initial='visible'
                    exit='exit'
                >
                    <CheckBox 
                        onChange={() => onCheck(product.id)}
                        checked={checked.includes(product.id)}
                    />
                </motion.div>
            </div>

            <div className="info-cell">
                <motion.div 
                    className="info-wrap" 
                    variants={exitVariants} 
                    initial='visible' 
                    exit='exit'
                >
                    <div className="img-container">
                        <img src={product.images[0]} alt="icon" className="product-img"/>
                        <div className="img-filter"/>
                        <div className="in-product-image-amount">{quantity}</div>
                    </div>
                    <div className="about">
                        <div className="title">{product.title}</div>
                        <div className="description">{truncateText(product.description, 60)}</div>
                    </div>
                </motion.div>
            </div>
            
            <div className="quantity-cell">
                <motion.div 
                    className="quantity" 
                    variants={exitVariants} 
                    initial='visible' 
                    exit='exit'
                >
                    <Amount 
                        amount={quantity} 
                        change={(one) => { 
                            if(quantity + one > 0){ // product in cart can't be displayed with amount -100..., ..., -1 or 0
                                setQuantity(parseInt(quantity) + one);
                                if(one === 1){
                                    setCart(addToStorage(product.id, cart))
                                }
                                if(one === -1){
                                    setCart(subtractFromStorage(product.id, cart))
                                }
                            }
                        }
                    }/>
                    <Remove remove={() => {
                        // 1. remove from cart-state (therefore from localStorage too)
                        const newStorage = removeFromStorage(product.id, cart);
                        setCart(newStorage)
                        // 2. remove from the page
                        removeProduct();
                    }}/>
                </motion.div>
            </div>

            <div className="price-cell">
                <motion.div className="price" variants={exitVariants} animate='visible' exit='exit'>
                    <span>${product.price.toFixed(2)}</span>
                </motion.div>
            </div>
                
        </motion.li>
    );
}

export default CartListItem;