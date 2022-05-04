import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Error from "../pages/Error";

export const routes = [
    {path: '/about', element: <About/>, exact: false},
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <PostIdPage/>, exact: true},
    {path: '/error', element: <Error/>, exact: false}
]