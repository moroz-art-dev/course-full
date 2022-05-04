import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                <Route path='*' to='/posts' element={<Navigate to="/posts" replace/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                    />
                )}
                <Route path='*' to='/login' element={<Navigate to="/login" replace/>}/>
            </Routes>
    );
};

export default AppRouter;