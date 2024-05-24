
import { useContext, useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../Hooks/useCart';
const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCart()
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    // console.log(user);
    const navOptions = <>
        <Link to='/'>
            <li className="group flex  cursor-pointer flex-col">
                Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </Link>
        <li className="group flex  cursor-pointer flex-col">
            Contact Us<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            Dashboard<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <Link to='/menu'>
            <li className="group flex  cursor-pointer flex-col">
                Our Menu<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </Link>
        <Link to='/order/salad'>
            <li className="group flex  cursor-pointer flex-col">
                Order Food<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </Link>
        <Link>
            <button className="btn btn-ghost">
                <FaShoppingCart />
                <div className="badge badge-secondary">+{cart.length}</div>
            </button>
        </Link>

        {
            user ?
                <>
                    <span>

                        <div className="dropdown dropdown-hover">
                            <img src={user?.photoURL} className='w-10 rounded-full ' alt="" />
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow text-black bg-base-100 rounded-box w-52">
                                <li className='ml-2 text-lg font-cinzel font-medium'>{user?.displayName}</li>
                                <li><a>Update Profile</a></li>
                            </ul>
                        </div>
                    </span>
                    <button onClick={handleLogOut} className='btn bg-[#D1A054] border-0'>Log Out </button>
                </> :
                <>
                    <Link to='/login'>
                        <li className="group flex  cursor-pointer flex-col">
                            Login<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                </>

        }
    </>
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <div className=''>
            <nav className="flex w-full lg:w-full container fixed z-10 bg-opacity-70 items-center justify-between bg-black px-4 py-2 text-white mb-24">
                <div className="scale-100  font-cinzel cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
                    <h2>Bistro Boss</h2>
                    <h2>Resturent</h2>
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    {navOptions}
                </ul>

                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className=" z-10  gap-2  bg-white text-black absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            {navOptions}
                        </ul>

                    )
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;

// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
// // import { AuthContext } from "../../../providers/AuthProvider";

// const Header = () => {
//     const { user, logOut } = useContext(AuthContext);
// console.log(user);
//     const handleLogOut = () => {
//         logOut()
//             .then(() => { })
//             .catch(error => console.log(error));
//     }

//     const navOptions = <>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/menu">Our Menu</Link></li>
//         <li><Link to="/order/salad">Order Food</Link></li>
//         <li><Link to="/secret">Secret</Link></li>
//         {
//             user ? <>
//                 <span>{user?.displayName}</span>
//                 <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
//             </> : <>
//                 <li><Link to="/login">Login</Link></li>
//             </>
//         }
//     </>

//     return (
//         <>
//             <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                         </label>
//                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
//                             {navOptions}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     <a className="btn">Get started</a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;