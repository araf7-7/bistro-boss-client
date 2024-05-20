
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
const Header = () => {
    const navOptions = <>
        <li className="group flex  cursor-pointer flex-col">
            Home<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            Services<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            About<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            Contact<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
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
            <nav className="flex w-full  fixed z-10 bg-opacity-70 items-center justify-between bg-black px-4 py-2 text-white mb-24">
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
                        <ul className=" z-10  gap-2  bg-white  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
                            {navOptions}
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header;