import {createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Team from "../Pages/Team/Team";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        element: <Layouts/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/team",
                element:<Team/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
        ],
    },

]);

export default router;