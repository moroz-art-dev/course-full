import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routes} from "../router";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    console.log(routes)
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            )}
            <Route path='*' to='/posts' element={<Navigate to="/posts" replace/>}/>
        </Routes>
    );
};

export default AppRouter;