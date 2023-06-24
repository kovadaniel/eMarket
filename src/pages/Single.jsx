import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetching from "../hooks/useFetching";
import PostService from "../API/PostService";
import PageHeader from "../components/PageHeader";
import ProductSliderSection from "../components/ProductSliderSection";
import ProductPanel from "../components/ProductPanel";
import ProductTabs from "../components/ProductTabs";
import Subscribe from "../components/Subscribe";
import singleTitleImage from '../img/img_bg_2.jpg'


function Single() {
    // single product page
    const params = useParams();
    const [product, setProduct] = useState();

    const [fetchProduct, isLoading] = useFetching(async () => {
        const response = await PostService.getProduct(params.id);
        setProduct(response);
    })
    useEffect(() => {
        fetchProduct();
    }, [])

    return (
        <div id="single">
            <PageHeader 
                title="Product details" 
                description="Dignissimos asperiores vitae velit veniam totam" 
                image={singleTitleImage}
            />

            <ProductSliderSection 
                isLoading={isLoading} 
                product={product}/>
            
            <ProductPanel product={product}/>
            
            <ProductTabs product={product}/>

            <Subscribe/> 
            
        </div>
    );
}

export default Single;