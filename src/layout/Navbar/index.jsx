import React, { useState } from "react";
import {
  Basket,
  FaceBook,
  Heart,
  Instagram,
  Logo,
  Search,
  Burger,
  Strelbottom,
} from "../../components";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const [open, setOpen] = useState(false);
const [activeIndex, setActiveIndex] = useState(null);


  return (
    <div>
      <div className="max-lg:hidden w-full bg-white fixed top-0 left-0 z-99 shadow-[0_4px_12px_0px_#cfcfcf40] mb-1 ">
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
      <div className="lg:hidden w-full bg-white fixed top-0 left-0 z-99 shadow-[0_4px_12px_0px_#cfcfcf40]">
        <div className="container h-18 flex items-center justify-between mainColor">
          <div className="mr-16">
            <Logo />
          </div>

          <div className="flex gap-3 justify-between items-center">
            <Heart />
            <Basket />
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
              <Burger />
            </button>
          </div>
          {open && (
            <div className="lg:hidden fixed top-18 left-0 w-full bg-white shadow-md z-98">
              <div className="relative max-w-71.25 m-auto rounded-[100px] border border-gray-400 overflow-hidden ">
                <input
                  type="text"
                  placeholder="search"
                  className="w-full h-12 pl-12 pr-4  outline-none border-none rounded-[100px]"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Search />
                </span>
              </div>
              <nav className="flex flex-col gap-4 p-4 mainColor">
                {["ALL PRODUCTS", "ABOUT SEEDRA", "OUR BLOG", "CONTACTS"].map(
                  (item, index) => (
                    <NavLink
                      key={item}
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? null : index)
                      }
                      className={`flex justify-between items-center transition-colors border-b border-[#EFEFEF] pb-3 ${
                        activeIndex === index ? "text-green-600" : "text-black"
                      }`}
                    >
                      {item}

                      <span
                        className={`transition-transform duration-300 ${
                          activeIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <Strelbottom />
                      </span>
                    </NavLink>
                  )
                )}
              </nav>
              <div className="flex gap-4 items-center p-4">
                <Instagram />
                <FaceBook />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
