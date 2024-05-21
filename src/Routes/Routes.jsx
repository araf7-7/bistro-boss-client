

import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from './../Root/Root';
import Menu from "../Our Menu/Menu";
import Order from "../Order/Order/Order";

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
                
            },
            {
                path:'/order/:category',
                element : <Order></Order>
                
            }
        ]
    }
])
