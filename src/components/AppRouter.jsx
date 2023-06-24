import { useContext } from "react";
import { DisplayContext } from "../context";
import SliderLoad from "./UI/SliderLoad/SliderLoad";
import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";

function AppRouter() {
    const {isAuth, isLoading} = useContext(DisplayContext);

    if(isLoading){
        return <SliderLoad/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => 
                    <Route
                        key={route.path}
                        element={route.component}
                        path={route.path}/>
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => 
                    <Route
                        key={route.path}
                        element={route.component}
                        path={route.path}/>
                )}
            </Routes>
            
    );

}

export default AppRouter;