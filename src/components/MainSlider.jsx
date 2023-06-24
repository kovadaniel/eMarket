import { useState } from "react";
import Description from "./UI/Description/Description";
import Slider from "./UI/Slider/Slider";

const slides = [
    {url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
     title: 'backPack'},
    {url: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
     title: "T-shirt"},
    {url: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
     title: "Jacket"},
    {url: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
     title: "Blouse"},
    {url: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
     title: "Bangle"},
    {url: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
     title: "Ring"},
    {url: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
     title: "Ring with a brilliant"},
]

const productDescriptions = Array(7).fill({
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
})



function MainSlider() {
    const [curIndex, setCurIndex] = useState(0);


    return (
        <div className="slider-container">
            <Slider 
                slides={slides} 
                curIndex={curIndex}
                setCurIndex={setCurIndex}/>
            <Description 
                products={productDescriptions}/>
        </div>
    );
}

export default MainSlider;