

import {
    createBrowserRouter
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from './../Root/Root';
import Menu from "../Our Menu/Menu";
import Order from "../Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import AllUsers from "../Dashboard/AllUser/AllUsers";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <PrivateRoute> <Menu></Menu> </PrivateRoute>

            },
            {
                path: '/order/:category',
                element: <Order></Order>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>

            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'Cart',
                element: <Cart></Cart>
            },
            // admin paths
            {
                path: 'users',
                element : <AllUsers></AllUsers>
            }
        ]
    }
])
