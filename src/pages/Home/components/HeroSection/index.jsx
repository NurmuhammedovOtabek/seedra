import React from 'react';
import { Barglar, Cliantro, KattaBarg } from '../../../../assets';
import { Fire } from '../../../../components';

function HeroSection(props) {
    return (
      <div className=" relative container w-full lg:h-113.75 h-165.75 bg-[#EAF1EB] mt-26 rounded-3xl  lg:items-start items-center flex flex-col-reverse lg:justify-between justify-center sm:flex-row overflow-hidden">
        <div className="lg:pl-17 pl-3.5  lg:pt-12 pt-5  lg:h-27 ">
          <h1 className="text-[#1F2533] lg:text-5xl text-[28px]  font-semibold  w-full m-0 p-0">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>
          <p className="mt-3 taxt-base lg:text-[16px] text-[14px] font-light w-full  max-w-140">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="lg:mt-6 mt-5 text-[#E55C5C] lg:text-[#1F2533] flex lg:gap-4.5 gap-3 items-center ">
            <Fire />
            <p className="lg:text-5xl text-[32px] font-semibold ">$12.56</p>
            <p className="text-[#70737C] text-[22px] font-semibold">
              <del> $15.56</del>
            </p>
          </div>
          <div className="lg:mt-6 mt-4.5">
            <button className="bg-[#359740] w-full lg:max-w-38.25 max-w-35.5 h-12 rounded-lg text-white mr-3">
              Add to card
            </button>
            <button className='bg-white w-full lg:max-w-38.25 max-w-35.5 h-12 rounded-lg text-[#359740]"'>
              Discover
            </button>
          </div>
        </div>
        <div className="flex items-center lg:pt-12 pt-2 w-full lg:max-w-87.25 max-w-47 ">
          <img
            src={Cliantro}
            alt=""
            className="w-full  lg:h-87.25 h-47 object-contain relative z-10"
          />
        </div>
        <img
          src={Barglar}
          alt=""
          className="absolute z-5 scale-30 -right-105 rotate-44 blur-[2px] -top-105"
        />
        <img
          src={KattaBarg}
          alt=""
          className="absolute z-5 lg:scale-60 scale-110 lg:-right-130 right-40 lg:rotate-10 rotate-170 lg:blur-[1px] lg:top-10 -top-15"
        />
      </div>
    );
}

export default HeroSection;