import React from 'react';
import { PotetoGirl, Spinch, Strawbery } from '../../../../assets';
import { Clock } from '../../../../components';

function OurBlog(props) {
    return (
      <div className="container mt-22">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-4xl text-[#1F2533]">Our blog.</h2>
          <button className="text-[#359740] font-medium text-[16px] w-full max-w-43.25 h-12.75 border border-[#EFEFEF] rounded-lg">
            Go to our blog
          </button>
        </div>
        <div className="mt-10.5 grid grid-cols-6 grid-rows-2 gap-7.5">
          <div className="relative overflow-hidden col-span-4 w-full max-w-182.5 h-75 bg-[#EAF1EB] rounded-xl flex gap-1.25">
            <div className=" relative z-10 pt-7.5 pl-7.5 w-[60%]">
              <p className="flex gap-2 items-center font-normal text-[14px] text-#70737C">
                <Clock />
                12.09.2021
              </p>
              <h3 className="mt-2 font-semibold text-2xl text-[#1F2533]">
                How to plant spinach correctly in winter
              </h3>
              <p className="font-normal mt-1 text-[#70737C] text-[14px]">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button className="text-[#359740] text-[16px] font-medium mt-3.5 bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg w-full max-w-26.5 h-12.75">
                Read
              </button>
            </div>
            <div className="absolute top-0 right-0 h-full w-[50%]">
              <img
                src={Spinch}
                alt="Spinach"
                className="absolute -bottom-30 -right-40 w-full h-full object-contain scale-155 origin-bottom-right"
              />
            </div>
          </div>
          <div className="relative overflow-hidden col-span-2 row-span-2 w-full max-w-87.5 h-157.5 bg-[#EFF2F8] rounded-xl pt-6 pl-6">
            <p className="flex gap-2 items-center font-normal text-[14px] text-#70737C">
              <Clock />
              12.09.2021
            </p>
            <h3 className="mt-2 font-semibold text-2xl text-[#1F2533]">
              How to plant spinach correctly in winter
            </h3>
            <p className="font-normal mt-1 text-[#70737C] text-[14px] pr-5">
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button className="text-[#359740] text-[16px] font-medium mt-3.5 bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg w-full max-w-26.5 h-12.75">
              Read
            </button>
            <img
              src={PotetoGirl}
              alt=""
              className="absolute -bottom-77 -right-53 w-full h-full object-contain scale-155 origin-bottom-right"
            />
          </div>
          <div className="relative overflow-hidden col-span-2 pt-7.5 pl-7.5 h-75 w-full max-w-87.5 bg-[#EFF2F8] rounded-xl">
            <p className="flex gap-2 items-center font-normal text-[14px] text-#70737C">
              <Clock />
              12.09.2021
            </p>
            <h3 className="mt-2 font-semibold text-2xl text-[#1F2533]">
              How to plant spinach correctly in winter
            </h3>
            <button className="text-[#359740] text-[16px] font-medium mt-3.5 bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg w-full max-w-26.5 h-12.75">
              Read
            </button>
            <img
              src={Strawbery}
              alt=""
              className="absolute w-full max-w-59.5 h-59.5 -bottom-25 -right-10 object-cover rounded-full"
            />
          </div>
          <div className="relative overflow-hidden col-span-2 pt-7.5 pl-7.5 h-75 w-full max-w-87.5 bg-[#EFF2F8] rounded-xl">
            <p className="flex gap-2 items-center font-normal text-[14px] text-#70737C">
              <Clock />
              12.09.2021
            </p>
            <h3 className="mt-2 font-semibold text-2xl text-[#1F2533]">
              How to plant spinach correctly in winter
            </h3>
            <button className="text-[#359740] text-[16px] font-medium mt-3.5 bg-[#FFFFFF] border border-[#FFFFFF] rounded-lg w-full max-w-26.5 h-12.75">
              Read
            </button>
            <img
              src={Strawbery}
              alt=""
              className="absolute w-full max-w-59.5 h-59.5 -bottom-25 -right-10 object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    );
}

export default OurBlog;