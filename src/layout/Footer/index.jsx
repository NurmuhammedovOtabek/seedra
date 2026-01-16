import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaceBook, Instagram, Logo } from '../../components';

function Footer(props) {
    return (
      <div className="w-full shadow-[0_-7px_80px_0px_#cfcfcf40] mb-1">
        <div className="container lg:h-42.5 max-lg:h-80.25 flex flex-col justify-center">
          <div className="max-lg:hidden flex gap-17.5 items-center mb-8">
            <div className="flex gap-16 ">
              <NavLink>ALL PRODUCTS</NavLink>
              <NavLink>ABOUT SEEDRA</NavLink>
              <NavLink>OUR BLOG</NavLink>
            </div>
            <div>
              <Logo />
            </div>
            <div className="flex gap-16">
              <NavLink>Terms&Conditions</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
          </div>
          <div className="lg:hidden flex justify-center items-center gap-9 flex-col">
            <div>
              <Logo />
            </div>
            <div className="flex text-[14px] justify-between  w-full mb-6">
              <div className="flex gap-6 flex-col">
                <NavLink>ALL PRODUCTS</NavLink>
                <NavLink>ABOUT SEEDRA</NavLink>
                <NavLink>OUR BLOG</NavLink>
              </div>
              <div className="flex gap-6 flex-col">
                <NavLink>Terms&Conditions</NavLink>
                <NavLink>Privacy Policy</NavLink>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 flex justify-between items-center pt-5">
            <div className="flex gap-6">
              <Instagram color="#359740" />
              <FaceBook color="#359740" />
            </div>
            <div>
              <span>All rights reserved</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer;