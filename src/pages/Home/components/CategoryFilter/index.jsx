import React from 'react';
import { Barg, Toplam } from '../../../../components';

function CategoryFilter(props) {
    return (
      <div className="container mt-10 flex gap-3 items-center w-full justify-between">
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">ALL</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Toplam />
          <span className="font-normal text-[14px] ">BUNDLES</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">HERBS</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">VEGETABLES</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">FRUITS</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">SUPPLIES</span>
        </div>
        <div className="h-18 rounded-lg border-2 border-[#EFEFEF] pt-5.5 pb-5.5 pl-4 pr-7.5 flex gap-2 items-center">
          <Barg />
          <span className="font-normal text-[14px] ">FLOWERS</span>
        </div>
      </div>
    );
}

export default CategoryFilter;