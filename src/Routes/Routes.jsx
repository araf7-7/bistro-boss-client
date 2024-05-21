

import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from './../Root/Root';
import Menu from "../Our Menu/Menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/menu',
                element : <Menu></Menu>
                
            }
        ]
    }
])
