import { AnimatePresence, motion } from "framer-motion";
import CartListItem from "./CartListItem";
import CheckBox from "./UI/CheckBox/CheckBox";
import Remove from "./UI/Remove/Remove";
import { removeFromStorage } from "../utils";
import { useContext } from "react";
import { DisplayContext } from "../context";

const collapseVariant = {
    exit: {height: 0, padding: 0, margin: 0, transition: {duration: .2}},
    visible: {opacity: 1, height: 'auto', transition: {duration: .2, delay: .3}},
    hidden: {opacity: 0, height: 0}
}

function CartList({products, setProducts, checked, onCheck, checkAll}) {
    const {cart, setCart} = useContext(DisplayContext);
    return (
        <div className="cart-list-container">
            <div className="cart-panel">
                <div className="cart-title">Cart</div>
                <Remove remove={() => {
                    // 1. remove all selected (checked) products from cart-state (therefore from localeStorage.cart)
                    let newCart = cart;
                    for(let id of checked){
                        // 1. remove from cart-state (therefore from localStorage too)
                        newCart = removeFromStorage(id, newCart);
                        // 2. set new state for products
                    }
                    setCart(newCart);
                    
                    // 2. remove all selected (checked) products from products-state to make them disappear
                    setProducts(products.filter(p => !checked.includes(p.id)));
                    }}/>
            </div>
            <ul className="cart-list">
                <AnimatePresence>
                    { products.length &&
                    <li className="cart-thead">
                        <div className="checkbox-cell">
                            <motion.div className="checkbox-wrap" variants={collapseVariant} exit='exit'>
                                <CheckBox onChange={() => checkAll()}/>
                            </motion.div>
                            
                        </div>
                        <div className="info-head-cell">
                            <motion.div className="th-wrap" variants={collapseVariant} exit='exit'>
                                Product
                            </motion.div>
                            </div>
                        <div className="quantity-head-cell">
                            <motion.div className="th-wrap" variants={collapseVariant} exit='exit'>
                                Quanity
                            </motion.div>
                        </div>
                        <div className="price-head-cell">
                            <motion.div className="th-wrap" variants={collapseVariant} exit='exit'>
                                Price
                            </motion.div>
                        </div>
                    </li>}
                </AnimatePresence>
                
                <AnimatePresence>
                    {products.map((p, i) => 
                        <CartListItem    
                            key={p.id} 
                            product={p} 
                            removeProduct={
                                () => {
                                    setProducts(products.filter(product => product !== p));
                                }
                            }
                            number={i}
                            checked={checked}
                            onCheck={onCheck}
                        />     
                    )}
                </AnimatePresence>
            </ul>

            {!products.length &&
                <motion.div className="empty-cart" initial='hidden' animate='visible' variants={collapseVariant} transition={{delay: 3}}>
                    No products in your cart
                </motion.div>
            }
        </div>
        
    );
}

export default CartList;