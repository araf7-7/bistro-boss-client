import { Helmet } from "react-helmet";
import Banner from "../../Banners/Banner";
import Swipper from "../../Banners/Swipper";
import Bistrobg from "./BistroBg/Bistrobg";
import Call from "./Call";
import Card from "./Card/Card";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopulerMenu/PoupularMenu";
import Testimonials from "./Testimonial/Testimonials";


const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home</title>
            </Helmet> 
        <div>
            <Banner></Banner>
            <div className="mx-auto md:w-4/12">
                <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---From 11:00am to 10:00pm---</h1>
                <h1 className="text-4xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">ORDER ONLINE</h1>
            </div>
            <Swipper></Swipper>
            <Bistrobg></Bistrobg>
            <div className="mx-auto md:w-4/12">
                <h1 className="italic mt-[60px] text-center text-xl text-[#D99904] font-medium">---Check it out---</h1>
                <h1 className="text-4xl text-center font-medium mt-10 border-y-4 py-4 border-gray-300 mb-16">FROM OUR MENU</h1>
            </div>
            <PopularMenu></PopularMenu>
            <Call></Call>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Card></Card>
        </div></>
    );
};

export default Home;