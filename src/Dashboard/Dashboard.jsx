import { BiBook, BiBookAlt, BiCalendar, BiFork } from "react-icons/bi";
import { FaCartShopping, FaList, FaUsers } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { MdEmail, MdReviews } from "react-icons/md";

import { NavLink, Outlet, } from "react-router-dom";
import useCart from "../Hooks/useCart";


const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true;

    return (
        <>
            <div className="flex">
                <div className="w-[356px] min-h-screen bg-[#D1A054]">
                    <ul className="menu p-4 text-lg font-cinzel text-black">

                        {
                            isAdmin ?
                                <>
                                    <li className="">
                                        <NavLink to='dashboard/adminHome'>
                                            <HiHome></HiHome>
                                            Admin Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/addItems'>
                                            <BiFork></BiFork>
                                            Add Items
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/manageItems'>
                                            <FaList></FaList>
                                            Manage Item
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/bookings'>
                                            <BiBook></BiBook>
                                            Manage Bookings
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            <FaUsers></FaUsers>
                                            All Users
                                        </NavLink>
                                    </li>

                                    <div className="divider"></div>

                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/reservation'>
                                            <BiCalendar></BiCalendar>
                                            Reservation
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to='/dashboard/Cart'>
                                            <FaCartShopping></FaCartShopping>
                                            My Cart ({cart.length})
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/payment'>
                                            <FaCartShopping></FaCartShopping>
                                            Payment History
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/payment'>
                                            <MdReviews></MdReviews>
                                            Add  Review
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/payment'>
                                            <BiBookAlt></BiBookAlt>
                                            My Bookings
                                        </NavLink>
                                    </li>
                                    <div className="divider"></div>
                                    <li className="">
                                        <NavLink to='/'>
                                            <HiHome></HiHome>
                                            Home
                                        </NavLink>
                                    </li>
                                </>
                        }
                        <li className="">
                            <NavLink to='/'>
                                <HiHome></HiHome>
                                Home
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/order/salad'>
                                <GiHamburgerMenu />
                                Menu
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to='/order/contact'>
                                <MdEmail />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>

            </div>

        </>
        // <div className="drawer md:drawer-open lg:drawer-open flex">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content flex flex-col items-start justify-start">
        //         <label htmlFor="my-drawer-2" className="btn  drawer-button md:hidden lg:hidden"><RiArchiveDrawerFill /></label>
        //     </div>
        //     <div className="drawer-side font-cinzel ">

        //         <ul className=" menu bg-[#D1A054] p-4 w-80 min-h-full  font-medium text-black">

        //             
        //             <li className="">
        //                 <NavLink to='/dashboard/cart'>
        //                    
        //                         My Cart
        //                 </NavLink>
        //             </li>
        //             <li><a>Sidebar Item 2</a></li>
        //         </ul>
        //     </div>
        //     <div className="flex-1">
        //         <Outlet></Outlet>
        //     </div>
        // </div>
    );
};

export default Dashboard;