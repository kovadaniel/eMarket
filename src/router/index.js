import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Single from "../pages/Single";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Services from "../pages/Services";
import Cart from "../pages/Cart";

export const privateRoutes = [

]


export const publicRoutes = [
    {path: '/about', component: <About/>, },
    {path: '/single/:id', component: <Single/>, },
    {path: '/main', component: <Main/>, },
    {path: '/products/:category', component: <Products/>, },
    {path: '/products', component: <Products/>, },
    {path: '/services', component: <Services/>, },
    {path: '/cart', component: <Cart/>, },




    
    {path: '/*', component: <Navigate to="/main" replace/>, }, 

]