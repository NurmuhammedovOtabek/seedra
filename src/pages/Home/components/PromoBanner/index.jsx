import React from 'react';

function PromoBanner(props) {
    return (
      <div className="container bg-[#FFE62E17] h-26 mt-4 w-full rounded-2xl flex flex-col justify-center items-center">
        <p className="font-semibold text-2xl text-[#1F2533]">We sell seeds</p>
        <p className="font-medium text-[16px] text-[#70737C]">
          that always sprout and gardening supplies which never break
        </p>
      </div>
    );
}

export default PromoBanner;