import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Head&Foot/Footer";
import Header from "../Head&Foot/Header";


const Root = () => {
    const location  = useLocation()
    const noHeaderFooter = location.pathname.includes('login') ||  location.pathname.includes('signup')
    return (
        <div>
           {noHeaderFooter ||  <Header></Header>}
            <Outlet></Outlet>
           {noHeaderFooter ||  <Footer></Footer>}
        </div>
    );
};

export default Root;