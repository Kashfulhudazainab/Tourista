import React,{ useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";

const Nav = ({ activeLink, setActiveLink }) => {
  const [showcart, setshowcart] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center p-5 z-50 w-full">
        <div>
          <span className="text-3xl font-bold cursor-pointer text-blue-500">MULTILAN</span>
        </div>
        <div className="hidden md:block font-semibold text-blue-500">
          <span>Contact@multilan.com</span>
        </div>
        <div
          className="w-[50px] h-[50px] bg-blue-500 flex items-center justify-center rounded-md shadow-xl cursor-pointer text-white hover:text-blue-500 hover:bg-white hover:border-blue-500 hover:border-2"
          onClick={() => setshowcart(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[30px] h-[30px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} showcart={showcart} setshowcart={setshowcart} />
    </>
  );
};

export default Nav;
