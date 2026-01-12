import React from 'react';
import { Barglar, Cliantro, KattaBarg } from '../../../../assets';
import { Fire } from '../../../../components';

function HeroSection(props) {
    return (
      <div className=" relative container w-full h-113.75 bg-[#EAF1EB] mt-8 rounded-3xl flex justify-between overflow-hidden">
        <div className="pl-17 pt-12  h-27">
          <h1 className="text-[#1F2533] text-5xl font-semibold w-full m-0 p-0">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>
          <p className="mt-3 taxt-base text-[16px] w-full max-w-140">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="mt-6 flex gap-4.5 items-center ">
            <Fire />
            <p className="text-5xl font-semibold">$12.56</p>
            <p className="text-[#70737C] text-[22px] font-semibold">
              <del> $15.56</del>
            </p>
          </div>
          <div className="mt-6">
            <button className="bg-[#359740] w-full max-w-38.25 h-12 rounded-lg text-white mr-3">
              Add to card
            </button>
            <button className='bg-white w-full max-w-38.25 h-12 rounded-lg text-[#359740]"'>
              Discover
            </button>
          </div>
        </div>
        <div className="flex items-center w-full max-w-87.25">
          <img
            src={Cliantro}
            alt=""
            className="w-full h-87.25 object-contain relative z-10"
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
          className="absolute z-5 scale-60 -right-130 rotate-10 blur-[1px] top-10"
        />
      </div>
    );
}

export default HeroSection;