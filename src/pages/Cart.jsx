import { useEffect } from "react";
import CartList from "../components/CartList";
import PageHeader from "../components/PageHeader";
import nativeTitle from "../img/img_bg_2.jpg"
import PostService from "../API/PostService";
import useFetching from "../hooks/useFetching";
import { useState } from "react";
import { parseStorage, productsInCart } from "../utils";
import { useContext } from "react";
import { DisplayContext } from "../context";
import CheckoutPanel from "../components/CheckoutPanel";
import { useMemo } from "react";


function Cart() {
    // array of {id: <number>, amount: <number>} of the products in the cart
    const [data, setData] = useState([]);
    // array of ids of the products in the cart that were checked bythe user
    const [checked, setChecked] = useState([]);

    /**
     * adds or removes products in cart to/from the array of checked products
     * @param {[<number>, <number>, <number>, ...]} - ids of checked products
     */
    const setCheckedProduct = useMemo(() => (id) => {
            if(checked.includes(id)){
                setChecked(checked.filter(p => p != id))
            } else{
                setChecked(checked => [...checked, id]);
            }
    }, [checked])

    // function adds all products in the cart to the 'checked' array ('checked' is a state)
    // or cleares 'checked' array if it is already contains all the products in cart
    const checkAll = useMemo(() => () => {
        const allIds = data.map(p => p.id);
        if(JSON.stringify(checked) === JSON.stringify(allIds)){
            setChecked([])
        } else{
            setChecked(allIds)
        }
    }, [checked, data])

    const {cart} = useContext(DisplayContext);

    useEffect(() => {
        // 1. parse cart from a string to an object
        const arrayOfIDs = parseStorage(cart);
        // 2. set products' IDs for further request to the server about them
        setData(arrayOfIDs);
    }, [cart])

    // general state with all information about products
    const [products, setProducts] = useState([]);
    
    const [fetchProducts, isProductsLoading, error] = useFetching(async () => {
        for(let productItem of data){
            console.log('productItem:', productItem);
            // 1. we should not load products that we already have
            if(products.map(p => p.id).includes(productItem.id)) continue;
            // 2. load products
            const product = await PostService.getProduct(productItem.id);
            setProducts(
                products => [...products, {...product, amountInCart: productItem.amount}]
            );
        }
       
    })

    useEffect(() => {
        fetchProducts();
        console.log('cart has been changed');
    }, [data])

    return (
        <div id="cart">
            <PageHeader
                title="Cart" 
                description="Dignissimos asperiores vitae velit veniam totam" 
                image={nativeTitle}
            />
            <div className="container">
                <div className="cart-content">
                    <CartList 
                        products={products} 
                        setProducts={setProducts} 
                        checked={checked}
                        onCheck={setCheckedProduct}
                        checkAll={checkAll}/>
                    <CheckoutPanel 
                        total={
                            products.reduce((total, p) => total + (p.price * productsInCart(p.id, cart)), 0)
                        } 
                        discount={0}/>
                </div>
            </div>

            

        </div>
    );
}

export default Cart;