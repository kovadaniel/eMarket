import { useEffect, useState } from "react";
import Slider from "../components/UI/Slider/Slider";
import PostService from "../API/PostService";
import { amountOfProductsOnMainPage, amountOfServicesOnMainPage, amountOfSlides, servicesData } from "../constants";
import useFetching from "../../src/hooks/useFetching";
import Services from "../components/Services";
import SliderLoad from "../components/UI/SliderLoad/SliderLoad";
import Products from "../components/Products";
import Testimonies from "../components/Testimonies";
import Counters from "../components/Counters";
import Subscribe from "../components/Subscribe";
//import for slider-example


function Main() {
    /*
    const [sliderHeight, setSliderHeight] = useState(window.innerHeight);
    window.addEventListener("resize", (e) => {
        console.log(window.innerHeight);
        setSliderHeight(window.innerHeight);
    })*/
    const [products, setProducts] = useState(null);
    const [users, setUsers] = useState(null);


    const [fetchProducts, isProductsLoading, error] = useFetching(async () => {
        //setTimeout(async () =>{
            const response = await PostService.getProducts();
            setProducts(response.data);
        //}, 10000)
    })
    const [fetchUsers, isUsersLoading, fuError] = useFetching(async () => {
        const response = await PostService.getUsers();
        setUsers(response);  
    })
  
    useEffect(() =>{
        fetchProducts();
        fetchUsers();
    }, []);

    return (
        <div id="main">
            <div className="slider-container">
                {console.log('isProductsLoading', isProductsLoading)}

                {!products
                ? <SliderLoad/>
                : <Slider slides={products.slice(0, amountOfSlides)}/>}
            </div>
            
            <Services services={servicesData.slice(0, amountOfServicesOnMainPage)}/>

            {products &&
                <Products 
                    className="products" 
                    products={products}
                    size={amountOfProductsOnMainPage}/>
            }
            <Testimonies id="testimonies" users={users}/>

            <Counters id="counters"/>

            <Subscribe/> 
        </div>
    );
}

export default Main;