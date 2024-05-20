import { Outlet } from "react-router-dom";
import Footer from "../Head&Foot/Footer";
import Header from "../Head&Foot/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;