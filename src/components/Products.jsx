import Product from "./UI/Product/Product";
import { amountOfLoadingProductsOnProductsPage, amountOfProductsInRow } from "../constants";
import SectionHeader from "./UI/SectionHeader/SectionHeader";
import { DisplayContext } from "../context";
import { useContext, useState } from "react";

/**
 * this component displayes Products' section
 * @param {*} {products, size}
 * @returns 
 */
function Products({products, size, ...props}) {

    const [shownItem, setShownItem] = useState(0); // number of the lowest show row on user-screen

    /* This is an array of boolean indicators of wheather an element has already been shown or not.
    * It is used to set correct animation delay to the arrearance-animation of an element
    *
    * When an element's animation finishes, a corresponding indicator is set to 'true'.
    *
    * To handle cases where user swiftly moves its screen-view down of the list of elements 
    * we set corrsponding indicators of the elements, that WERE in the sceen-view and then MOVED OUT of it, to 'true'
    * 
    * When some new elements (products) are loaded, shownArray in extended on the amount of loaded elements
    * */
    //const [shownArray, setShownArray] = useState(Array(amountOfLoadingProductsOnProductsPage).fill(false));



    return (
        <div className="products-section" {...props}>
            <div className="container">
                <SectionHeader 
                    inscription='Cool stuff'
                    title='Products'
                    body='Dignissimos asperiores vitae velit veniam totam fuga molestias accusamus alias autem provident. Odit ab aliquam dolor eius.'/>
                <div className="products-container">
                    {products.length && [...products, ...products, ...products].map((product, i) => {
                        //const delay = mobileView ? `0ms` : `${(i - shownItem)  * 200}ms`
                        return (
                            <Product 
                                key={product.id} 
                                product={product}
                                animationDuration={i - shownItem > 0 ? 0.5 : 0.001}
                                animationIndex={i - shownItem} 
                                //delay={mobileView ? `0ms` : `${(i - shownItem)*200}ms`} // this option is used when we want every string to appear onView independently
                                setShownItem={() => {if(i > shownItem) setShownItem(i)}}
                            />
                        )
                    }
                    )}
                </div>
                
            </div>
        </div>);
}

export default Products;