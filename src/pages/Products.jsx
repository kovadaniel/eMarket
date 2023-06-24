import PageHeader from "../components/PageHeader";
import Subscribe from "../components/Subscribe";
import productsTitleImage from "../img/img_bg_2.jpg"
import ProductsSection from '../components/Products'
import { useState } from "react";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import { useEffect } from "react";
import { amountOfLoadingProductsOnProductsPage } from "../constants";
import useObserver from "../hooks/useObserver";
import { useRef } from "react";
import { useParams } from "react-router-dom";

function Products({data}) {
    const params = useParams();
    const [products, setProducts] = useState(false);
    const [limit, setLimit] = useState(amountOfLoadingProductsOnProductsPage);
    const [page, setPage] = useState(1);

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


    const lastElement = useRef();

    const [fetchProducts, isProductsLoading, error] = useFetching(async (limit) => {
        let response;
        if(params.category){
            response = await PostService.getCategoryProducts(params.category, limit);
        } else{
            response = await PostService.getProducts(limit);
        }
        
        setProducts(response.data);
    });

    useEffect(() => {
        // as our server does not have fuctionality to accept requests with 'page' param, 
        // every time the page is set to the next, we load even more products (more on amount of products on the page)
        fetchProducts(limit * page); 
      }, [page]);

    // here we initialise our intersection-observer for endless-scrolling
    useObserver(
        lastElement, 
        !products || products.length === limit * page,  /* we can load new products when we haven't yet loaded any or 
                                                    when limit does not match actual amount of products (when 
                                                    we exceeded have displayed all available products) */
        isProductsLoading, 
        () => setPage(page + 1),
        () => {}
    );

    return (
        <div id="products">
            <PageHeader 
                title={params.category ? params.category : 'Products'}
                description='Dignissimos asperiores vitae velit veniam totam'
                image={productsTitleImage}
            />

            <ProductsSection products={products}/>
            <div ref={lastElement}/>

            <Subscribe/>
        </div>
    );
}

export default Products;