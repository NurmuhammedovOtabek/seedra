import React from "react";
import {
  Basket,
  FaceBook,
  Heart,
  Instagram,
  Logo,
  Search,
} from "../../components";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <div className=" w-full shadow-[0_4px_12px_0px_#cfcfcf40] mb-1 ">
      <div className="container h-18 flex items-center mainColor">
        <div className="mr-16">
          <Logo />
        </div>
        <div className=" flex gap-6 items-center mr-11">
          <NavLink>ALL PRODUCTS</NavLink>
          <NavLink>ABOUT SEEDRA</NavLink>
          <NavLink>OUR BLOG</NavLink>
          <NavLink>CONTACTS</NavLink>
        </div>
        <div className="flex gap-3 justify-between items-center">
          <div className="flex gap-2 justify-between items-center">
            <Instagram />
            <FaceBook />
          </div>
          <div className="relative max-w-71.25 rounded-[100px] border border-gray-400 overflow-hidden ">
            <input
              type="text"
              placeholder="search"
              className="w-full h-12 pl-12 pr-4  outline-none border-none rounded-[100px]"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2">
              <Search />
            </span>
          </div>
          <div className="flex gap-3 justify-between items-center">
            <Heart />
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
